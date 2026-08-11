/*array 
recyclable 
mixed datatype : string boolean array etc.
don't access arbitory string 
zero based indexing: start from 0
*/


const arr = ["shreya","shruti", "sushrut"]
console.log(arr[1]);    //shruti

//array method
const myarr = [ 2,3,4,7,8,9]
myarr.push(5)      //add value at end
console.log(myarr);   //(7) [2,3,4,7,8,9,5]

myarr.pop()       //remove last element
console.log(myarr); // (6)  [2,3,4,7,8,9]

myarr.unshift(1)     // add value at 1st
console.log(myarr);  //(7) [1,2,3,4,7,8,9]

console.log(myarr.includes(6));  //op in boolean
console.log(myarr.indexOf(6));  //op: -1  not exist in arr
console.log(myarr.indexOf(2));  //op: 1

const newArr = myarr.join()    //it convert arr into string 
console.log(newArr);   //2,3,4,7,8,9
console.log(typeof newArr);   //string

//slice : don't include last index
//operate origin array 
console.log("A" , myarr);
const myn1 = myarr.slice(1,4)   // [2,3,4,7,8,9]
console.log(myn1);   //op:[3,4,7]


//splice:  it include last index 
//don't operate original array
console.log("B", myarr);  
const myn2 = myarr.splice(1,4) //[2,3,4,7,8,9]  
console.log(myn2);    // [3,4,7,8]