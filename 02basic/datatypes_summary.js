//javascript is a statically or dynamically typed?
//JavaScript is a dynamically typed language. This means that the data type of a variable is not declared and can change during the program's execution. For example, you can assign a string to a variable, and then later assign a number to the same variable. The variable will now be of type number.
//Static typing, on the other hand, is a system where the data type of a variable is declared and cannot change. This can help to prevent errors, as the compiler will check to make sure that the data types of variables are compatible.


//So JavaScript is a dynamically typed language.(interview question)


// Data Types In js ==> (1) Primitive Datatype, (2) Non Primitive Datatype
// 7 types primitive datatype :-> (1) String, (2) Number, (3) Bollean, (4) Null, (5) Undifind, (6) Symbol, (7) BigInt..

// String Datatype:-> Exampale
const name = "Hello!";
// Number Datatype:-> Exampale
const num = 213;
//Boolean datatype:-> Exampale
const isLoggedIn = true/false;
//Null Datatype:-> Exampale
const outsideTemp = null;
//Undifind datatype:-> Exampale
let emailId;
// Symbol Datatype:-> Exampale
const Id = Symbol('123');
const anotherId = Symbol('2135');
// console.log(Id === anotherId);
//BigInt Datatype:-> Exampale
const bigNumber = 1223557452484;




// Referance (Non Primitive Datatype)
//(1) Array, (2) Object (3) Function ........

const heros = ["Thor", "saktiman", "ironman"];
 let myObj = {
    name:"Ayan",
    agg:24,
 }

 const myFunction = function() {
    console.log("hello world!");
 }
console.log(typeof anotherId);



//The typeof Operator
//The production UnaryExpression : typeof UnaryExpression is evaluated as follows:

// Let val be the result of evaluating UnaryExpression.
// If Type(val) is Reference, then
// If IsUnresolvableReference(val) is true, return "undefined".
// Let val be GetValue(val).
// Return a String determined by Type(val) according to Table 20.
// Table 20 — typeof Operator Results
// Type of val	Result
// Undefined	"undefined"
// Null	"object"
// Boolean	"boolean"
// Number	"number"
// String	"string"
// Object (native and does not implement [[Call]])	"object"
// Object (native or host and does implement [[Call]])	"function"
// Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".

//https://262.ecma-international.org/5.1/#sec-11.4.3...//


//Stack (Primitive Datatype).  // Heap(Non primitive datatype)//

// let myLaptopName = "HP Pavilion";
// let anotherLaptopName = myLaptopName;
// anotherLaptopName = "MackBook Air";
// console.log(myLaptopName);
// console.log(anotherLaptopName);

// let userOne = {
//     email: "abc@gmaiil.com",
//     upi :"ghy@upi.com"

// }
// let userTwo = userOne
// userTwo.email = "dfe@gmail.com"
// console.log(userOne.email);
// console.log(userTwo.email);



// let myWatch = "boat";
// let anotherWatch = myWatch;
// anotherWatch = "noise";

// console.log(myWatch);
// console.log(anotherWatch);

//Stack Exampale:->
let myWatch = "Sonata";
let anotherWatch = myWatch;
anotherWatch = "FireBolt";
console.log(myWatch);
console.log(anotherWatch);

//Heap Exampale:-.

let userOne = {
   email: "acd@gmail.com",
   upi: "qas@upi.com"
}
let userTwo = userOne
userTwo.email = "yyt@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);