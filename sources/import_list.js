const csv = require('fast-csv');
const path = require('path');
const fs = require('fs-extra');
const YAML = require('yaml');

/**
 * Static Constants
 */
const CSV_FILE = path.join(__dirname, 'set_in_stone_perpetual_list.csv');
const CSV_HEADERS = ['stone', 'column', 'order', 'pid', 'name', 'sex', 'birth', 'year', 'age', 'death', 'notes', 'link'];
const MARKDOWN_FILE = path.resolve(__dirname, '../src/pages/the-children/index.md');
const LINK_URL = 'https://history.churchofjesuschrist.org/overlandtravel/pioneers/';
const STONE_YEARS = [
  '1847-1850',
  '1851-1852',
  '1852 cont',
  '1853-1854',
  '1855',
  '1856',
  '1856 cont',
  '1857',
  '1859-1860',
  '1861-1862',
  '1862 cont',
  '1863',
  '1863-1865',
  '1866',
  '1867-1868',
  '1868 cont'
];

/**
 * Load the Markdown File
 *
 * @param      {<type>}   file    The file
 * @return     {Promise}  { description_of_the_return_value }
 */
async function readMarkdown(file) {
  const data = await fs.readFile(file, 'utf8');
  const parts = data.split(/^---$/gm);

  return {
    frontmatter: YAML.parse(parts[1]),
    markdown: parts[2].replace(/$\n/gm, '')
  };
};

/**
 * Write the Markdown File
 *
 * @param      {<type>}  file    The file
 * @param      {<type>}  data    The data
 * @return     {<type>}  { description_of_the_return_value }
 */
function writeMarkdown(file, data) {
  return fs.outputFile(file,
    `---\n${YAML.stringify(data.frontmatter)}---\n${data.markdown}`,
    'utf8'
  );
}

/**
 * Load the CSV File
 *
 * @param      {<type>}   file     The file
 * @param      {<type>}   headers  The headers
 * @return     {Promise}  { description_of_the_return_value }
 */
function readStonesCSV(file, headers) {
  return new Promise((resolve, reject) => {
    const stones = [];

    fs.createReadStream(file)
      .pipe(csv.parse({
        headers: headers,
        renameHeaders: true
      }))
      .on('error', error => reject(error))
      .on('data', row => {
        if ((row = toRow(row))) {
          const index = row.stone - 1;
          let stone = stones[index];

          if (!stone) {
            stone = [];
            stones[index] = stone;
          }
          stone.push(row)
        }
      })
      .on('end', total =>
        resolve(
          sortStones(stones)
        )
      );
  });
}

/**
 * Normalize the Name
 *
 * @param      {<type>}  name    The name
 */
function toName(name) {
  const [last = '', first = ''] = name.split(',');

  return `${first.trim()} ${last.trim()}`;
}

/**
 * Sort the stone Names
 *
 * @param      {<type>}  stones  The stones
 * @return     {<type>}  { description_of_the_return_value }
 */
function sortStones(stones) {
  return stones.map(stone =>
    stone.sort((a, b) =>
      a.order > b.order
    )
  )
}

/**
 * Normalize CSV Row
 *
 * @param      {<type>}  row     The row
 */
function toRow(row) {
  return {
    ...row,
    stone: parseInt(row.stone, 10),
    order: parseInt(row.order, 10),
    age: parseInt(row.age, 10),
    name: toName(row.name),
    sex: row.sex.trim().toLowerCase(),
    column: row.column.trim().toLowerCase(),
    link: row.link.replace(LINK_URL, '')
  }
}

/**
 * Main Begin-End
 *
 * @return     {Promise}  { description_of_the_return_value }
 */
async function main() {
  const mdFile = await readMarkdown(MARKDOWN_FILE);
  const stones = await readStonesCSV(CSV_FILE, CSV_HEADERS);

  mdFile.frontmatter.stones = stones.map((stone, index) => ({
    heading: `Stone ${index + 1}`,
    image: `/img/stone-${index + 1}.jpg`,
    years: STONE_YEARS[index],
    names: stone.map(child => ({
      name: child.name,
      link: child.link
    }))
  }));

  await writeMarkdown(MARKDOWN_FILE, mdFile);
}

/**
 * Execute
 */
main().then(
  console.log,
  console.log
);
