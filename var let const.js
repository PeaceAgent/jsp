//var, let and const 


//let >>> mutable
//const >>> constant 
//use const as often as possible

const name = "Shay"; // declaration and initialization
let age = 25;
const hasHobbies = true;

//name = "Max"; //this will give an error cause trying to initialize const variable
//console.log(name);

let anotherVariable; //declaration
anotherVariable = 3; //initialization


//scope of var let const
//let statement declares a block-scoped local variabl
// var keyword, which declares a variable globally, or locally to an entire function regardless of block scope
//`const` is a signal that the identifier won’t be reassigned.
//`let` is a signal that the variable may be reassigned
//var variables can be re-declared and updated
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1

function varTest() {
    var x = 1;
    {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
  
  function letTest() {
    let x = 1;
    {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }

var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined'


var tester = "hey hi";
    
function newFunction() {
    var hello = "hello";
}
console.log(hello); // error: hello is not defined