/* eslint-disable no-console */
//reads our mockdata and writes it to a file called db.json
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { courses, authors, likedQuotes, likedJokes } = mockData;
const data = JSON.stringify({ courses, authors, likedQuotes, likedJokes });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
