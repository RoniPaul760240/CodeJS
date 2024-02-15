const tinderUser = {}

tinderUser.name = "ayan"
// tinderUser.email = "ayanpal20@hotmail.com"
// tinderUser.gender = "male"
tinderUser.id = "120abc"
tinderUser.loggedin = "false"

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

// console.log(obj3);








// console.log(tinderUser);
// console.log(typeof tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isloggedin'));


//course.courseinstrutor

const course = {
    coursename : " script",
    price : 999,
    courseInstrcutor: "Ayan"
}
// const {courseInstrcutor: insturctor} = course
// console.log(insturctor);         // both will be same
const {courseInstrcutor} = course
console.log(courseInstrcutor);


