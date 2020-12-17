const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

//another way

const printName2 = ({name, age, greet}) => {
    console.log(name, age, greet);
}
printName2(person);

//another way

const { name, age } = person;
console.log(name, age);

//array destructuring

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
console.log(hobbies);



