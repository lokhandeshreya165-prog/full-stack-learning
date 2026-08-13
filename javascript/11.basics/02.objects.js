//singleton 
Object.create    //constructor method

//obj literals
const obj = {
    name: "shruti",
    "full name" : "shreya lokhande",     //it only run with way2 square
    age :20,
    location : "pune",
    email : "shreya@gmail.com"
}
//way1
console.log(obj.name);  //shruti
console.log(obj.location);   //pune

//way2
console.log(obj["name"]);    //shruti
console.log(obj["full name"]);  //shreya lokhande

//change value  directly with asign oprator
obj.age = 18
console.log(obj.age);     //18

//don't change :used freeze
// Object.freeze(obj)
obj.age = 25     //op :18

console.log(obj);   //op:{name: 'shruti', full name: 'shreya lokhande', age: 18, location: 'pune', email: 'shreya@gmail.com'}


//symbol 
//used in square notation

const mySym = Symbol("nashik")
const obj2 = {
    name : "satyam",
    [mySym] : "nashik"
}
console.log( obj2[mySym]);    //op:nashik   bun without square it act like string



//function

obj.greeting = function(){
    console.log("hello obj user");    //op:hellow obj user
}
obj.greeting2 = function(){
    console.log(`hello obj user, ${this.name}`);    //op:hellow obj user, shruti  --refer name by using this
}
obj.greeting()   //run greeting function
obj.greeting2();  //run greeting2 function


//**** obj-2 ***//
const temuser = {}
temuser.id = "sat123"
temuser.name = "satyam"
temuser.isloggedIn = false

console.log(temuser);   //{id: 'sat123', name: 'satyam', isloggedIn: false}


//nested obj
const reguser = {
    userfullname : {
        name : {
            lname: "lokhande",
            fname: "shreya"
        }
    }
}
//run by using dot notation
console.log(reguser.userfullname.name);   // {lname: 'lokhande', fname: 'shreya'}

//method of obj

const obj4 = { 1: "shre", 2:"satu"}
const obj5 = { 3: "sushrut" , 4:"shourya"}

//1st merge
const obj6 = Object.assign({},obj4,obj5)
console.log(obj6);    //{1: 'shre', 2: 'satu', 3: 'sushrut', 4: 'shourya'}
//2nd spread
const obj7 = {...obj4 , ...obj5}   //simple 
console.log(obj7);    //{1: 'shre', 2: 'satu', 3: 'sushrut', 4: 'shourya'}


//array of obj
const users = [
    {
        id :1,
        name : "shree"
    },
    {
        id :2,
        name:"shru"
    },
    {
        id : 3,
        name : "shourya"
    }
]

users[2].name
console.log(Object.keys(temuser));   //(3) ['id', 'name', 'isloggedIn']  --- give all keys
console.log(Object.values(temuser));   //(3) ['sat123', 'satyam', false]  ---give all values of key
console.log(Object.entries(temuser));    //[ [ 'id', 'sat123' ], [ 'name', 'satyam' ], [ 'isloggedIn', false ] ]   ---give the keyvalue pair

console.log(temuser.hasOwnProperty('name'));  //true
console.log(temuser.hasOwnProperty('islogged'));   //false