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
    greet() { //greet: () =>
        console.log('Hi, I am ' + this.name);
    }

};
console.log(person);
person.greet();