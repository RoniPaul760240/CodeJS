const tinderUser = {}

tinderUser.name = "ayan"
tinderUser.email = "ayanpal20@hotmail.com"
tinderUser.gender = "male"
tinderUser.loggedin = "true"

// console.table(tinderUser);

const regularUser = {
    email: "palayan82@gmail.com",
    fullname: {
        userfullname:  {
            fristname: "Ayan",
            lastname: "Paul"
    }
   
    }
}
// console.log(regularUser.fullname);

const obj1 = {1:"a", 2:"b"}

const obj2 = {3:"a", 4:"c"}

// const obj3 = {obj1, obj2}

const obj3 = Object.assign ( {}, obj1, obj2)

console.log(obj3);