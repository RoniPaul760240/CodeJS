//Array 

const myArr = [0,1,2,3,4,5];

const myArr2 = [0,1,2,3,4,5,6,7];


//Array Mathods
// myArr.push (6)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(10));
// console.log(myArr.indexOf(20));

const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof newArr);

// Slice & Splice
// console.log("A ", myArr);

const mynewArr1 = myArr.slice(1, 3)

// console.log(mynewArr1);

// console.log("B " , myArr);

const mynewArr2 = myArr.splice(0, 3)
// console.log("c ", myArr);
// console.log(mynewArr2);



const marvel_heros = ["antman", "thor", "ironman"]
const dc_heros = ["batman", "saktiman", "hanuman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);
// console.log(typeof allheros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

console.log (Array.isArray("AyanPaul"))
console.log(Array.from("AyanPaul"))