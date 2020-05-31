/*
  user input: employee first name
  logged data: that employee's last name and job title
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
  firstName: process.argv[2],
};

const queryString = `
  SELECT lastname, title
  FROM "employee"
  where firstname="${userInput.firstName}"`;

db.all(queryString, (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }

  db.close();
});

