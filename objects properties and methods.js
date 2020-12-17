//Objects: properties and methods
/*const object = {
    key:value,
    key:value,
    key:value,
    method() {

    }
};*/
const person = {
    name: "Max",
    age: 25,
    greet() { // this is an method of the person object//greet: () =>
        console.log('Hi, I am ' + this.name);
    }

};
console.log(person);
person.greet();

//more examples
const anotherPerson = {name: "max", age: 25};
console.log(anotherPerson);