const csv = require('fast-csv');
const path = require('path');
const fs = require('fs-extra');

/**
 * Static Constants
 */
const MISSING_FILE = path.join(__dirname, 'missing_list.csv');
const MISSING_HEADERS = ['pid', 'name', 'death', 'age', 'notes', 'link'];
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
    const list = [];

    fs.createReadStream(MISSING_FILE)
      .pipe(csv.parse({
        headers: MISSING_HEADERS,
        renameHeaders: true
      }))
      .on('error', error => reject(error))
      .on('data', row => {
        if ((row = toRow(row))) {
          list.push(row)
        }
      })
      .on('end', total => {
        console.log(list);
        resolve(list);
      });
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
    age: parseInt(row.age, 10) || 0,
    name: toName(row.name),
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

