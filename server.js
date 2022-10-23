const name = require("./name");
const address = require("./address");

const myname = new name();

console.log(`myname: ${myname.name}`);
console.log(`city: ${address.city}`);
address.calculateCordinates();
