//spread operator(all the elements of an array or all the properties of an object )

//spread operator with arrays
//arrrays

const numbers = [1, 2, 3, 4, 5];
const copyNumbers = [...numbers, 6];
console.log(numbers);
console.log(copyNumbers); //copy of the numbers elements plus the new elements

//objects

const person = {
    name: 'peaceagent',
    age: '25',
    greet() {
        console.log('H, I am a ' + this.name);
    }
}
const copiedPerson = {...person};
console.log(copiedPerson);
console.log(copiedPerson.name);

//rest operator (merge multiple arguments into an array)
//normal 

const toArrayNormal = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}
console.log(toArrayNormal(1, 2, 3));

//rest operator
const toArrayRest = (...args) => {
    return args;
}
console.log(toArrayRest(1, 2, 3, 4));