const fs = require("fs")
const os = require("os")


// console.log("1")
// //Blocking...
// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log(result);
// console.log("2")

console.log("1")
//non-Blocking
fs.readFile("contacts.txt", "utf-8" ,(err, result) => {
    console.log(result)
})
console.log(3)
console.log(3)
console.log(3)

// Default Thread Pool Size = 4
// Max? - 8core cpu - 8

console.log(os.cpus().length);