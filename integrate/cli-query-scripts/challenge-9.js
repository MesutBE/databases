/*
  user input: table name, column name, search string, number of entries
  logged data: return a given number of rows matching the search parameter
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
  column: process.argv[2],
  table: process.argv[3],
  searchString: process.argv[4],
  length: process.argv[5],
};

const queryString = `
  SELECT *
  FROM ${userInput.table}
  WHERE ${userInput.column}
  LIKE '%${userInput.searchString}%'
  LIMIT '${userInput.length}';`

  // SELECT * FROM 'Invoice' where billingcity  LIKE '%o%' LIMIT "10"

db.all(queryString, (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }

  db.close();
});
