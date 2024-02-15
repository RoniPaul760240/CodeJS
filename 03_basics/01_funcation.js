

function SayMyName() {
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
}

// SayMyName()

// function addTwoNumbers (number1, number2) {   //(when you make a defination of function and input numbers , strings they call are peramiters)

//     console.log(number1+number2);   // (when you call the funcations and inputs numbers and strings they are call arguments)
// }


function addTwoNumbers (number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
}
const result = addTwoNumbers(99, 22)
// console.log("Result: ", result);

function loginUserMassage (username = "shyam"){
    if(!username){
        console.log("please enter a user name");
        return
    }
    return`${username} userjustoggedin`
}
// console.log(loginUserMassage("Ayan"))
console.log(loginUserMassage("ayan"))
