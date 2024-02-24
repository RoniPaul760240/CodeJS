// **************** NOTE **************** 


// JEC MEANS :- JAVASCRIPT EXECUTION CONTEXT


// JavaScript is a single-threaded interpreted language. 
// Every browser has its own JavaScript engine. 
// Google Chrome has the V8 engine, Mozilla Firefox has SpiderMonkey, and so on. 
// They all are used for the same goal, because the browsers cannot directly understand JavaScript code.



// Browser ka global execution context hein wo thoda sa alag hota hein
// Node js ka alag hota hein (bang, dino)

// Browser jaydatar important hota hein to us mein this ka value window object aate hein *** important

// JavaScript is a single-threaded language.

// ==> Global execution context
// ==> Function execution context
// ==> Eval execution context 

// [{}]-> this is java script code example .. Java script code 2 phase mein ya run hota hein 
// 1) memory creation phase (creation phase) (memory creatuon phase mein sirf veriables jo declere hua hein usk liya jayga alocate hote hein)
// 2) Execution phase 

// ********* Example*********

let val1 = 20
let val2 = 29

function addnum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = (val1, val2)
let result2 = (20, 29)