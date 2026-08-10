//*********** number ***********/
const score = 100
console.log(score);

const score1 = new Number(100)
console.log(score1);    //it give the proper datatype

console.log(score1.toString().length);  //it convert into string &give the length 

console.log(score1.toFixed(2));  // o/p is 100.00  it give the proper poit value 

const score2 = 256.7988936
console.log(score2.toPrecision(3));   // o/p = 257  it give the roundOff value

const score4 = 25000000
console.log(score4.toLocaleString());  // o/p = 25,000,000 -- without any thing
console.log(score4.toLocaleString('en-IN'));  //o/p = 2,50,00,000 



//********* Math *************/

console.log(Math);      // it is an object in which having diff labrary
console.log(Math.abs(-5))  //give 5  -- change value
console.log(Math.abs(5));  // give 5
console.log(Math.round(5.7));  //  o/p 6
console.log(Math.ceil(4.3)); //  5  ceil give always greater value
console.log(Math.ceil(4.0)); //
console.log(Math.floor(3.9));  // 3 always lowest value
console.log(Math.min(4,2,7,9));  // 2 minimum 
console.log(Math.max(3,7,2,8));   // 8 maximum

console.log(Math.random());  //give value in between 0 - 1
console.log((Math.random()* 10 ) + 1);  // give --//-- 1 to 9

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)) + min); // it give  value range in between min amd max 

