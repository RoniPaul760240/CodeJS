function sayMyName(){

    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
}

const result = addTwoNumbers(5,6)
// console.log("Result: ", result);

function logInUser(userName = "Ram"){
    if(!userName){
        console.log("Please enter a user name");
        return
    }
    return `${userName} just log in` 
}
// const myUser = logInUser("Ayan")
console.log(logInUser("Ayan"));
// console.log(logInUser());