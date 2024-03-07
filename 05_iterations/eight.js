const myNumbs = [1,2,3,4,5,6,7,8,9,10]


const newNums =myNumbs.map((nums)=>{ 
    return nums * 10 
})
// console.log(newNums);

// myNums.forEach((nums)=>
// console.log(nums + 10)
// )

const newNums1 = 
                myNumbs.map( (nums) => nums*10)
                .map((nums) => nums + 1)
                .filter((nums)=> nums >= 40) 
console.log(newNums1);



