

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
// console.log(loginUserMassage("ayan"))

function calculatecartprice (val1,val2,...num1) {
    return num1
}
// console.log(calculatecartprice(200,300,400,5000));

const user = {
    productname: "mars serum",
    prices: 499
}

function handleobject (anyobject){
    console.log(`product name is ${anyobject.productname} and price is ${anyobject.price}`);
}
// handleobject(user)
handleobject({
    productname: "ponds serum",
    price: 599
})

const myNewArray = [200,899,255,4174,1258]

function returnSecondvalue (getArray){
    return getArray[6]
}
// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,565,789,417,5856,1254,5858]));

