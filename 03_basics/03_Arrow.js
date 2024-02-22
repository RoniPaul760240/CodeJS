// This means current context

const user = {
    username : "Ayan",
    price : 233,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// // change values
// user.username = "Ram"
// user.welcomeMessage()


// console.log(this);
// function hp(){
//     console.log(username);
// }
// hp()

const tea = () => {
    let username = "ayan"
    console.log(this.username);
}
// tea()

// const addTwo = (num1 , num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(3,9));


// const addTwo = (num1 , num2)=> (num1 + num2)
const addTwo = (num1 , num2)=> ({username:"Ayan"})

console.log(addTwo(3,9));