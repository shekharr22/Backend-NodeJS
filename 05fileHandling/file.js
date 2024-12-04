const fs = require("fs");

//sync Call..
// fs.writeFileSync("./test.txt", "hello world");

//Async Call..
// fs.writeFile("./test.txt", "hello world Async", (err) => {})

//read file sync
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

//read file async
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(result);
//   }
// });

//append in file
fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

//copy file
// fs.cpSync("./test.txt", "./copy.txt");

//delete file
// fs.unlinkSync("./copy.txt")

// file stats
console.log(fs.statSync("./test.txt")); 

//create directory 
// fs.mkdirSync("my-docs")
fs.mkdirSync("my-docs/a/b", {recursive: true});