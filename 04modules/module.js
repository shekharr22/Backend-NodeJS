
const buffer = require('buffer') // built in package

const math = require('./math')

//De-structuring -> we can directlly use add and sub function
const {add , sub  } = require('./math')

console.log("Math Add value is : ",math.add(2 , 4));
console.log("Math Subtract value is : ",math.sub(2 , 4));

console.log("\nUsing destructured function \n")

console.log("Math Add value is : ",add(2 , 4));
console.log("Math Subtract value is : ",sub(2 , 4));

