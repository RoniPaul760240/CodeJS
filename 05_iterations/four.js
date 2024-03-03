// for of loop

const array1 = ['a', 'b', 'c'];

for (const i of array1) {
    // console.log(i);
}

const greetings = "Hello World"
for (const i of greetings) {
    // console.log(`each char is  ${i}`);
    
}


//// Map*****

const map = new Map ()
map.set('In', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
// console.log(map);

for (const [name, value] of map) {
    console.log(name, ":-",value);
}