'use strict'
// There are mainly 8 data types in JS

// Number 
let num = 8
console.log(num)
// The number type represents both integer and floating point numbers.

// BigInt
let bigInt = '1234567890123456789012345678901234567890n'
console.log(bigInt)
// In JavaScript, the “number” type cannot represent integer values larger than (253-1) 
// (that’s 9007199254740991), or less than -(253-1) for negatives. 
//It’s a technical limitation caused by their internal representation.

// String 
let name = 'Tarun'
alert(name)
// in JS we have double quoted, single quoted strings(both are same)
// The third type is BackTicked strings(``)
const engine = 'JS'
// The expression inside ${…} is evaluated and the result becomes a part of the string.
console.log(`The current engine is ${engine}`)
console.log(`${1+2}`) // result is 3
console.log('${1+2}')


// null 
let x = null
console.log(x)

// undefined 
let y
console.log(y)
