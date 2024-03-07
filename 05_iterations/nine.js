//// Reduce

const myNums = [1,2,3]
// const total  = myNums.reduce(function(acc,currval){
//     console.log(`acc val:- ${acc} and curr val:-${currval}`);
//     return acc + currval

// },0)

const myTotal = myNums.reduce((acc, carr) => acc+carr ,0)

console.log(myTotal);


const Shoppingcart =[
 {
    courseName: "js course",
    price : 2999
},
 {
    courseName: "py course",
    price : 999
},
 {
    courseName: "fsd course",
    price : 22999
},
 {
    courseName: "data science course",
    price : 222999
},
]

const totalprice =Shoppingcart.reduce((acc, item)=>acc + item.price, 0)
console.log(totalprice);