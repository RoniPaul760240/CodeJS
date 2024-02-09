// Singleton

// objects literals

//Object.create // constructor method its call singleton
//Symbol

const mySym = Symbol("key1")
const JsUser = {
    name: "Ayan",
    "full name": "Ayan Paul",
    [mySym]:"mykey1",
    age: 25,
    location: "Bankura",
    email: "palayan20@gmail.com",
    isLoggedIn: false
}
// Object.freeze(JsUser);
// console.log(typeof JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "palayan@google.com"
// Object.freeze(JsUser)
JsUser.email="palayan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
