// const useremail = "a@gmail.com"
// if(useremail){
//     console.log("Got email id");
// }
// else{
//     console.log("No email id");
// }





// *** false values
// "", 0, -0, BigInt 0n, null, undefined, NAN, 

// *** truthy values 
// "0", 'false', " ", [], {}, function(){},

const userArray = []
if (userArray.length === 0) {
    console.log("Empty array");
}

const emptyObj = {}
    if (Object.keys(emptyObj).length === 0) { 
        console.log("Object is Empty");    
    }

// Nullish Coalescing Operartor (??)

let vel1 = 5 ?? 10
console.log(vel1);

let vel2 = undefined ?? 20
console.log(vel2);

let vel3 = null ?? 20
console.log(vel3);

// **** Terniary Operator//
//** Condition ? true : false

const teaprice = 100
teaprice <= 80 ? console.log("less then 80") :console.log("more then 80")



