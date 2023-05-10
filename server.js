/*
 * Modules
 *
const name = require("./name");
const address = require("./address");
const myname = new name();
console.log(`myname: ${myname.name}`);
console.log(`city: ${address.city}`);
address.calculateCordinates();
 */

/*
 * File system
 *
const fs = require("fs");
fs.appendFile("message_A.txt", "KODE WITH KAMRAN", (err, data) => {
  err ? console.log(`Error: ${err}`) : console.log("FILE CREATED");
});
fs.open("message_B.txt", "w", (err, data) => {
  err ? console.log(`Error: ${err}`) : console.log("FILE CREATED");
});
fs.writeFile("message_C.txt", "HEY! I AM UPDATED!", (err, data) => {
  err ? console.log(`Error: ${err}`) : console.log("FILE CREATED");
});
fs.unlink("message_C.txt", (err, data) => {
  err ? console.log(`Error: ${err}`) : console.log("FILE DELETED");
});
 */

/*
 * How to handle Async Node JS
 *

const fs = require("fs");

fs.unlink("message_B.txt", (err, data) => {
  err ? console.log(`Error: ${err}`) : console.log("FILE DELETED");
});

console.log("THIS IS THE END OF FILE");
* /

