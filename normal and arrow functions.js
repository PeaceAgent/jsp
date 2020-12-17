
//normal functions
const name = "Max";
let age = 29;
const hasHobbies = true;
age = 30;

function summarizeUser(userName, userAge, userHasHObby) {
    return ('Name is ' + userName, + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHObby);
}


//arrow functions
//ES6 came with arrow functions
//with anonymous function turned into named function with const 
const summarizeUser = function (userName, userAge, userHasHObby) {
    return ('Name is ' + userName, + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHObby);
}


//arrow function
const summarizeUser = (userName, userAge, userHasHObby) => {
    return ('Name is ' + userName, + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHObby);
}

//another arrow function
const add = (a, b) => {
    return a + b;
}

//another arrow function
const add = (a, b) => a + b;
//another arrow function
const add = a => a + 1;


//arrow function with no paramaters set
const addRandom = () => 1 + 2;
