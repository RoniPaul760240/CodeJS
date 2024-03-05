/// for in loop 

const myObject = {
    js: 'javascript',
    dsa: 'Data straturte and algorithum',
    rb : 'ruby',

}
for (const key in myObject) {
//   console.log(`${key} shortcut is for ${myObject[key]} `);
}

const programing = ["js", "c++", "ruby", "node"]
for (const key in programing) {
//    console.log(programing[key]);
}



const map = new Map ()
map.set('In', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")

for (const key in map) {
  console.log(map[key]);
}