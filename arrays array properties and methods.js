//arrays: array properties and methods

const person = {
    name: "Shay",
    age: 25,
    greet() {
        console.log("Hi, I am " + this.name);
    }
};

//const newArray = [1, 2, 3];


//for (let hobby of hobbies) {
    //console.log(hobby);
//}

//const numbers = [1, 2, 3, 4, 5, 6]

/*for (let i of numbers) {
    console.log(i + 'a');
}*/

//build-in methods for arrays accessed with .(dot notation)

//hobbies.push(100);
const hobbies = ['Sports', 'Cooking']
console.log(hobbies.map(hobby => {
    return "Hobby: " + hobby; 
}));
console.log(hobbies.map(hobby => "Hobby: " + hobby));
console.log(hobbies);
