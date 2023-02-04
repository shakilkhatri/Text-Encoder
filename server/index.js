const fs = require("fs");

const data = fs.readFileSync("./file.txt", "utf-8");
const data2 = fs.readFileSync("./file.txt", "base64");
const data3 = fs.readFileSync("./file.txt", "hex");
const data4 = fs.readFileSync("./file.txt", "latin1");

console.log(data);
console.log("---------------------");
// console.log(data2);
// console.log(data3);
console.log(data3);

fs.writeFileSync("output", data3);
