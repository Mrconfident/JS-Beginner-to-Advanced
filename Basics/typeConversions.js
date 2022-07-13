// string conversion

let value = true
console.log(typeof value) // results boolean
value = String(value) // type conversion to Boolean to string
console.log(typeof value) // results string

// Numeric Conversion
// Numeric conversion happens in mathematical functions and expressions automatically.

// For example, when division / is applied to non-numbers

console.log('24'/'3') // results a number 8

let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num); // number

console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z")
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0

// Boolean Conversions
console.log( Boolean(-1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false