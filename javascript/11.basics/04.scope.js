  
// {}- it is scope
// global scope 
let a = 100
var b = 200
//block scope  -- written in loop
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("inner:", a);    //op: inner: 10
}
console.log(a);   //op:100
console.log(b);   //op: 200
console.log(c);   //op:30  -- var is come outside the loop - wrong don't used var inside loop
//in local scope - block only used the let and const but var not used

//closur :
//only child function access the parent varible
function one(){          //parent function
    const username = "shreya"
    function two(){         //child funct
        const age = 20
        console.log(username + ` age is ` + age);   ////op: shreya age is 20
    }
    //console.log(age);    // -- give error : parent fun don't access child var
    two()            //call fun two
}
one()     //call fun one
//if-else also follow scope like function

//way-1:directly write function
console.log(addone(3))        //op: 4
function addone(num){
    return num + 1
}


//way-2:fun hold in var
//console.log(addtwo(5));    // give error: function hold in variable 
const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5))   //op: 7