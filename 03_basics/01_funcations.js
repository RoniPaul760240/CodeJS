// function sayMyName(){

//     console.log("A");
//     console.log("Y");
//     console.log("A");
//     console.log("N");
// }

// // sayMyName()

// // function addTwoNumbers(num1, num2){
// //     console.log(num1 + num2);
// // }

// function addTwoNumbers(num1, num2){
//     let result = num1 + num2
//     return result
// }

// const result = addTwoNumbers(5,6)
// // console.log("Result: ", result);

// function logInUser(userName = "Ram"){
//     if(!userName){
//         console.log("Please enter a user name");
//         return
//     }
//     return `${userName} just log in` 
// }
// // const myUser = logInUser("Ayan")
// console.log(logInUser("Ayan"));
// // console.log(logInUser());

function myName(){
    console.log("A");
    console.log("y");
    console.log("A");
    console.log("N");
}
// myName()

// function addTwoNumbers(num1,num2){         //when we are make the function defination and iputs the value (number and string) they call peramiters
//     console.log(num1 + num2);

// }

function addTwoNumbers(num1,num2){ 
//    let result = num1+num2
 return num1 + num2
}
const result = addTwoNumbers(3 , 5)   // arguments

// console.log("Result :" , result);


function logInUser(username){
    if(username === undefined){
        console.log("Please enter a user name");
        return
    }
    return `${username} just log in`
}
console.log(logInUser());

