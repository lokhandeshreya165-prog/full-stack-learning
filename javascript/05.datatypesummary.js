/* primitive : 
7 Types
String : called by value
Number : 
boolean : true, false
Null : Empty 
Undefined : declare memory space
Symbol : used for make unique
BigInt : .............n
*/ 

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userName;
const Id = Symbol('567')
const SId = Symbol('567')
console.log( Id = SId);

const a = 357436939479n

/*
Reference (Non primitive)
Array , Object, Function 
*/
const heros = ["shreya" , "shruti", " satyam"]
let myobj = {
    name : "shourya",
    age: 4,
}

//declaratio of function
const myfun = function(){
    console.log("shreya");
}