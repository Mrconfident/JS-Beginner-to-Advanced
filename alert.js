'use strict'
// alert( 'Hello, world!' )
// alert( 'This is JS Tutorial')
// alert(3+2+'1')

// semicolon in JS means newLine (In most cases, a newline implies a semicolon)

// But “in most cases” does not mean “always”!
// An error example

// alert("Hello")[1, 2].forEach(alert); JS engine sees the below code like this
alert('Hello World')

[1,2].forEach(alert)


// Correct way to do because, 
// That’s because JavaScript does not assume a semicolon before square brackets [...]. 
// So, the code in the last example is treated as a single statement.
alert('Hello World');

[1,2].forEach(alert)

// 'use strict' is used to enable modern JS and written always on the top
// use strict is OFF by default
//So, for now "use strict"; is a welcome guest at the top of your scripts. 
//Later, when your code is all in classes and modules, you may omit it.

