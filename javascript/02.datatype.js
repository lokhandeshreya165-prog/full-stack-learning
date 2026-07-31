//alert(hello shreya)  used for browser not nodejs

console.log(5+3)
console.log("shreya")

let name = "shreya"
let age = 20
// let isLoggedIn = false
let state; //undefined


// number => 2 to power 53 range
// bigint = for big number
// string => ""   write in - ""
// boolean => true(1)/false(0)
// null => standalone value  - empty
// undefined =>
// symbol => used for unique  

// object 

console.log(typeof "shreya");
console.log(typeof age);


/* conversion of DATATYPE */
// let score = 20
// console.log(typeof score);

let score = "30"
console.log(typeof(score));
let valueInNumber = Number(score)    //convert sring into no. 
console.log(typeof valueInNumber);
console.log(valueInNumber);  // for output 

/*  conversion
output:
 "30" = 30
 "shreya" = Nan
 "33ab" = Nan
 true = 1 
 false = 0
 */

 //boolean conversion//
 let isLoggedIn = ""       //it give o/p false -> only the '0'come otherwise false
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

 /*
 0 => false
 any no => true
 string => true
 " " => false
*/

// STRING conversion //

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);