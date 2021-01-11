const csv = require('fast-csv');
const path = require('path');
const fs = require('fs-extra');

/**
 * Static Constants
 */
const STONES_FILE = path.join(__dirname, 'stones_list.csv');
const STONES_HEADERS = ['stone', 'column', 'order', 'pid', 'name', 'sex', 'birth', 'year', 'age', 'death', 'notes', 'link'];
const LINK_URL = 'https://history.churchofjesuschrist.org/overlandtravel/pioneers/';

/**
 * Load the CSV File
 *
 * @param      {<type>}   file     The file
 * @param      {<type>}   headers  The headers
 * @return     {Promise}  { description_of_the_return_value }
 */
module.exports = function() {
  return new Promise((resolve, reject) => {
    const stones = [];

    fs.createReadStream(STONES_FILE)
      .pipe(csv.parse({
        headers: STONES_HEADERS,
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
