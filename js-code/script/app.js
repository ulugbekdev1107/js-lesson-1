"use strict";





let number = 12;
let string = "coding";
const myfile = "scriptjs";
const myAge = 21;
const borderColor = "blue";
const myfolders = "/bin/dev/Documents"

number = 444;

const person = {
    name : "Yusuf",
}
 person.name = "Dilmurod";

console.log(person.name)
console.log(number, string, myfile, myAge, borderColor, myfolders);



// jsda eng katta son 9^52 darajasi

// Infinity bu cheksiz degan manoni aglatadi yani cheksizlik.

// console.log(-8 / 0); Infinity chiqaradi bu misol
/* NaN bu yuq ikki xil malumotni bir biriga qushish ayirish kupaytirin not en number xisoblanadi */

//Number
let number = 5.6;
console.log(-8 / 0); //Infinity
console.log("string" * 8); //Nan 'not en number'

// String
const clientName = `Samar`;
const userName = "samar";
const string = 'Lorem ipsum dolor set.';

//Boolean

const isMarried = false; // noto'g'ri
const isCircleEarth = true; // rost

// // null bu qachonki yuq uzgaruvchini chaqirsak shunda null kelib chiqishiga null deyiladi
// let cileantAge;
// console.log(cileantAge);

// // undifined" Bu bizda o'zgaruvchi bor, lekin unga qanaqadir malumot berilmasa. Qiymati yuq bulsa, bizda console undefined chiqaradi.

// //object

const person = {
    name : `Ulug'bek`,
    lastName : `Eshnazarov`,
    age : 22,
    isMarried : false,
    whatWorks : `Programmer`,
    prgorammingLanugageFreamworks : {
        frontendLanguage : 'JavaScript',
        frontenFreamwork : 'ReactJS',
        frontendLibrary  : "silader.js, jqueryjs, js-component",
        beckendLanguage  : 'JavaScript(Nodejs, Expressjs, Nestjs, TypeScript)',
        beckendSiTechnology : 'Python {Django}, Django RestAPI',
    },
    dataBase : {
        baseName : 'PostegrSQL',
        baseNameTwo : 'SQL',
    },
    nameAPI : {
        nameOne : 'RESTAPI',
    }
}

console.log(person.prgorammingLanugageFreamworks)


// Array -- massiv deiyladi va massivlarda  har doim raqamlar noldan boshlanadi.

let personName = ['userCode', 12233, "password" ['devloper tools'],

]

// const person = confirm("Are your here..")
// console.log(person)

// let age = +prompt("How old are you?", "22");

// console.log( age + 10)



const favouriteColor = [];
favouriteColor[0] = prompt("What's your favourite color one", "")
favouriteColor[1] = prompt("What's your favourite color one", "")
favouriteColor[2] = prompt("What's your favourite color one", "")
favouriteColor[3] = prompt("What's your favourite color one", "")
favouriteColor[4] = prompt("What's your favourite color one", "")
favouriteColor[5] = prompt("What's your favourite color one", "")
favouriteColor[6] = prompt("What's your favourite color one", "")
console.log(favouriteColor)
