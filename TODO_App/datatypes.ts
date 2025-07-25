let lname = 'Abdul';
// lname = 10; //cannot change types

/*
    Data Types - typescript can determine the type from the value
    string
    number
    boolean
    array
    enum
    tuple
    any
    void
*/


//String
let fname : string;
fname = "A.Samad";

let newname = fname.toUpperCase();

console.log(newname);

//number
let age : number;
age = 25;
// age = "25"; //will enforce only numbers are assigned to variable age

let dob = "30";
let result = parseInt(dob);

console.log(result);

//boolean
let isValid : boolean = false;

console.log(isValid);

//array
let emptyList : string[];
emptyList = ["Abdul", "Samad"];

let numList : Array<number>;

numList = [1,2,3,4,5];

let res = numList.filter(num => num > 2);
console.log(res);

let numArray = numList.find((num) => num === 2);
console.log(numArray);

let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);

//enum
const enum Color {
    Red,
    Green,
    Blue
}

let c : Color = Color.Blue;

//tuple
// let newNum = numList[5];
let swapNum : [firstNumber: number, secondNumber: number];

function swapNumbers(num1 : number, num2 : number) : [number, number] {
    return [num2, num1];
}

swapNum = swapNumbers(10,20);

swapNum[0];
swapNum[1];

//any -  should not be used unless neccesarry
let department : any;

department = "IT";
department = 10;


