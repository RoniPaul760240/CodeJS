// let name = "Ayan";
// const repoCount = 50;
// console.log(`my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('ayanhhf-ohd');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,6);
console.log(newString);

const anotherString = gameName.slice(-7,3);
console.log(anotherString);

const name = "             Ayan           ";
console.log(name);
console.log(name.trim());

const url = "https://ayanpaul.com/ayan20%paul"
console.log(url.replace('20%', '-'));
console.log(url.includes('roni'));
console.log(gameName.split(','));