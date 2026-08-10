const name = "Shreya";
const lastname = "Lokhande";
console.log(`hello my name is ${name} my surname is ${lastname}`);

const gameName = new String('Shreya')
console.log(gameName[2]);   ///it give the index value
console.log(gameName.__proto);

console.log(gameName.length); //give the length of  
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));   //give the char in that position
console.log(gameName.indexOf('y'));   // give the position of char

const newString = gameName.substring(0,4)  //divide the string acc to index
console.log(newString);

const anotherString = gameName.slice(-6,4)    // -ve value start at end and +ve at 1st
console.log(anotherString);

const name1 = "    shruti     "
console.log(name1);
console.log(name1.trim());     // trim remove the space 

const url = "http://shreya.com/shreya165lokhande"
console.log(url.replace('165','-'));  // it used for replaced 1st is existed val ans 2nd is replaced value
console.log(url.includes('shreya'));    //includes-- used for find the value hai aya nahi give o/p as true
console.log(url.split('/'));