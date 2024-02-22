
const a = 100  // This Global scope

// let c = 30

if (true) {
    const a = 10 // this is block scope
    let c = 30
    // console.log("Inner: ", a); 
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);

// console.log(c);


function one(){
    const userName = "Ayan";


function two(){
    const website = "youtube"
    // console.log(userName);
}
    // console.log(website)

two()
}
one()


if(true){
    const username = "Ayan"

    if (username === "Ayan") {
        const website = " youtube"
        // console.log(username + website);
    }

    // console.log(website);
}
// console.log(username);



// +++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num +1
}
// addtwo() //
const addtwo = function(num){
    return num + 2
}
console.log(addtwo(20));