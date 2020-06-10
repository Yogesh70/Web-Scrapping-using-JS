// synchronous code
let fs= require("fs");
console.log("Before");
// synchronous
let content = fs.readFile("f1.txt");
console.log("Content " + content);
console.log("After");
