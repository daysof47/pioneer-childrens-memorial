const csv = require('fast-csv');
const path = require('path');
const fs = require('fs-extra');
const YAML = require('yaml');
const loadStonesCSV = require('./load_stones_csv');
const loadMissingCSV = require('./load_missing_csv');

const MARKDOWN_FILE = path.resolve(__dirname, '../src/pages/the-children/index.md');

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
 * Main Begin-End
 *
 * @return     {Promise}  { description_of_the_return_value }
 */
async function main() {
  const mdFile = await readMarkdown(MARKDOWN_FILE);
  const stones = await loadStonesCSV();
  const missing = await loadMissingCSV();

  mdFile.frontmatter.stones = stones.map((stone, index) => ({
    heading: `Stone ${index + 1}`,
    image: `/img/stone-${index + 1}.jpg`,
    years: STONE_YEARS[index],
    names: stone.map(child => ({
      name: child.name,
      link: child.link
    }))
  }));

  mdFile.frontmatter.stones.push({
    heading: 'Virtual Stone 17',
    image: '/img/stone-17.jpg',
    years: 'additional',
    names: missing.map(child => ({
      name: child.name,
      link: child.link
    }))
  });

  await writeMarkdown(MARKDOWN_FILE, mdFile);
}

/**
 * Execute
 */
main().then(
  console.log,
  console.log
);
