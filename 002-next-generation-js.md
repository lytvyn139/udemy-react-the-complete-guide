# next gen js

## let / const
## arrow functions
```
const sayName = name => {
    console.log(name);
}
sayName('root);

const multiply = number => number * 5;
console.log(multiply(2))

```
## Export/Import

```
//person.js
const person = {
    user: 'root';
}
export default person;

//utility.js
export const clean = () => {...}
export const baseData = 10;

//app.js
import person from './person.js'

import {clean} from './utility.js'; //named import
import {clean as clenStuf} from './utility.js'; //named import

import {baseData} from './utility.js'; //named import

import * as bundled from './utility.js';

```

## Classes

```
class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        console.log(this.gender);
    }

}

class Person extends Human{
    constructor() {
        super()
        this.name = 'root';
        this.gender = 'robot';
    }
    printMyName() {
        console.log(this.name)
    }
}

const person = new Person();
person.printMyName();
person.printGender();

```
## Classes, Properties and Methods
ES6
```
constructor() {
    this.myProperty = 'value'
}
```
ES7 

```
myProperty = 'value'
```

```
class Human {
    gender = 'male';
    printGender = () => {
        console.log(this.gender);
    }

}

class Person extends Human{
    name = 'root';
    gender = 'robot';
    printMyName = () => {
        console.log(this.name)
    }
}

const person = new Person();
person.printMyName();
person.printGender();
```

## Spread & Rest operators
Spread used to split up array elements OR obj properties
```
let oldArr = [1,2];
const newArr = [...oldArr, 3,4]
console.log(newArr) //[ 1,2,3,4 ]

const newArr2 = [oldArr, 3,4] 
console.log(newArr2) //[ [1,2],3,4 ]

const person = {
    name: 'root'
}

const newPerson = {
    ...person,
    age: 100
}
console.log(newPerson);


```

Rest used to merge a list of functions arguments into an array
```
const filter = (...args) => {
    return args.filter(element => element === 1);
}
console.log(filter(1,2,3))
```

## Destructuring
The difference between Destructuring and Spread, spread takes all elements and distributes them to new arr. And Spread pulls out single elements and stores them in variables for arrays and obj.
```
[a,b] = ['hello', 'user'];
console.log(a);
console.log(b);

{name} = {name: 'user, age: 100}
console.log(name);
console.log(age); //undefined
```

## Reference and Primitive Types Refresher

```
// primitive type
const number = 1;
const num2 = number;
```

```
// reference type
const person = {
    name: 'user'
}

const secondPerson = {
    ...person
};
console.log(secondPerson); //user

person.name = 'admin';
console.log(secondPerson); //user

```
## Refreshing Array Functions
```
const numbers = [1,2,3];
const doubleNumArray = numbers.map((num) => {
    return num *2
})
console.log(numbers);
console.log(doubleNumArray);

```