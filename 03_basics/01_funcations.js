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
// console.log(logInUser());

// Practice 

function addUser(name){
    if(name === undefined){
        console.log("user is logged in");
        return
    }
     return `${name} just logged in`
}
// console.log(addUser());
// console.log(addUser("roni"));

function calculateCartValue(val1 , val2,...num1){
    return num1
}
// console.log(calculateCartValue(200,2525,789,636));


const user = {
    username : "Ayan",
    prices : 199
}

function handleObject (anyobject) {
  console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
  }
//   handleObject(user)
handleObject({
    username :"Roni",
    price : 220
    })
    
const myNewArray = [200,898,547,3636,785]

function secondValue(getArray){
    return getArray[1]
}

console.log(secondValue(myNewArray));
