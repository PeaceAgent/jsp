// bad habits

//var name = "Max"; // string
//var age  = 29; // number 
//var hasHobbies = true; // boolean

// good habits

const name = "Max";
let age = 29;
const hasHobbies = true;

function summarizeUser (userName, userAge, userHasHobby) {
    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);
}

console.log(summarizeUser(name, age, hasHobbies));
console.log(summarizeUser(name, 25, hasHobbies));
console.log(summarizeUser('Maxx', 25, hasHobbies));

