const useremail = "a@gmail.com"
if(useremail){
    console.log("Got email id");
}
else{
    console.log("No email id");
}





// *** false values
// "", 0, -0, BigInt 0n, null, undefined, NAN, 

// *** truthy values 
// "0", 'false', " ", [], {}, function(){},

const userEmail = []
if (userEmail.length === 0) {
    console.log("Empty array");
}

const emptyObj = {}
    if (Object.keys(emptyObj).length === 0) { 
        console.log("Object is Empty");    
    }

// Nullish Coalescing Operartor (??)

let vel1 = 5 ?? 10
console.log(vel1);

