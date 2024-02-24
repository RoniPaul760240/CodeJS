// Immediately Invoked Function Expressions (IIFE)

// *** interview Global scope k polution se problem hoti hein kabhi khabhi to us global scope jo veriable hein and jo bhi declearation hein us polution ko remove korne k liya IIFE use kiya 

(function chai(){              // This is name IIFE  ***interview
    console.log("DB CONNECTED");
})();                          // ';' add to iife

( (name) => {             // Un name IIFE ***interview 
    console.log(`DB SUCEESFULLY CONECTED ${name}`);
})('ayan');