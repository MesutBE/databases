/*
  user input: table name, column to order by, ASC or DSC
  logged data: all columns from the given table, sorted as instructed by the user input
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
  table: process.argv[2],
  column: process.argv[3],
  order: process.argv[4],
};

const queryString = `
  SELECT *
  FROM ${userInput.table}
  ORDER BY ${userInput.column} ${userInput.order};`

// SELECT * FROM 'Genre' order by name asc

db.all(queryString, (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }

  db.close();
});

