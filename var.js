//var 
//var variables can be re-declared and updated
//var declarations are globally scoped or function/locally scoped.
var greeter = "hey hi";
var greeter = "say Hello instead";

var greeter = "hey hi";
greeter = "say Hello instead";

//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:


//This 
console.log (greeter);
var greeter = "say hello"

//it is interpreted as this:
var greeter;
console.log(greeter); // greeter is undefined
greeter = "say hello"

//So var variables are hoisted to the top of their scope and initialized with a value of undefined.
//let is block scoped
//let can be updated but not re-declared.


//summary
//var variables can be re-declared and updated
//var declarations are globally scoped or function/locally scoped.

//let is block scoped
//let can be updated but not re-declared.


//const declarations are block scoped
//const cannot be updated or re-declared
//Every const declaration, therefore, must be initialized at the time of declaration.

/*var declarations are globally scoped or function scoped while let and const are block scoped.
var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables
 can neither be updated nor re-declared.They are all hoisted to the top of their scope. But while var variables are initialized 
 with undefined, let and const variables are not initialized.While var and let can be declared without being initialized, 
 const must be initialized during declaration.*/