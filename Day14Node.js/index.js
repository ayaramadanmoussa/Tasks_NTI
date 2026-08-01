const fs = require("fs");
const students = require("./data");
const path = require("path");

console.log("Students:");
console.log(students);

console.log("File Name:");
console.log(path.basename(__filename));

console.log("Current Directory:");
console.log(__dirname);

fs.writeFileSync("note.txt", "Hello Node.js");
console.log("File created successfully.");

const content = fs.readFileSync("note.txt", "utf8");
console.log(content);

const os = require("os");

console.log("Operating System:", os.platform());
console.log("Home Directory:", os.homedir());

