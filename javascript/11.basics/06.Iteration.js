//loop
//1.for

for(let index = 0; index< 10; index++){
    const element = index;
    console.log(element);    //op: 0 1 2 3 4 5 6 7 8 9
}

for(let i = 0; i<=10; i++){
    console.log(`table of : ${i})`);
    for(let j =0; j<=10; j++){
        console.log(i + '*' + j + '=' + i*j);
    }
}


//while loop 
let index1 = 0
while (index1 <= 10){
    console.log(`value of index is ${index1}`);
    index1 = index1 + 2 
}

let myArray = ['shreya', 'shruti', 'sakshi']
let arr = 0
while (arr < myArray.length){
    console.log(`my name is ${myArray[arr]}`);
    arr = arr + 1
}

//do-while loop
let value = 1
do{
    console.log(`value is ${value}`);
    value++
}while (value <=10)

//array loop
/*****1.for-of loop***/
const arr = [1,2,3,4,,5,6]
for (const num of arr ){
    console.log(num);     //op: 1 2 3 4 undefined 5 6 
}

const string = "shreya"
for(const str of string){
    console.log(` ${str}`);   //op: s h r e y a 
}

//map -- used for unique value duplicate not allow. it write a only 2nd value when dublicate are found 
const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of america")
map.set('Fr', "france")
map.set('IN', "india")

console.log(map);   ///op: Map(3) {size: 3, IN => indea, USA => united sta…f america, Fr => france}
//duble india is not write
for(const [key,value] of map){
    console.log(key, ':',value);
}  
//op:
// IN : india
// USA : united states of america
// Fr : france

//only map are iterativa object is not iterate 
//how to write object for iteration - by using for in loop
//don'y used for-in loop on map
/****2.for-in loop***/
//in object
const myobject = {
    js : "javascript",
    py : "python",
    DB : "database",
    rb : "ruby"
}
for(const key in myobject){
    //console.log(key);         //op: js py DB rb 
    console.log(`${key}  -- shortcut for '${myobject[key]}'`);
}
/*op:
js  -- shortcut for 'javascript'
py  -- shortcut for 'python'
DB  -- shortcut for 'database'
rb  -- shortcut for 'ruby'
*/

//for-in loop for array
const lang = ["js","py", "db","cpp"]
for(const key in lang){
    //console.log(key);     //it give num key op: 0 1 2 3  
    console.log(lang[key]);   //op: js py db cpp
}

//for-each loop  -- for array-function
const myCoding = [
    {
        langname : "javascript",
        langfile : "js"
    },
    {
        langname : "python",
        langfile : "py"
    },
    {
        langname : "style",
        langfile : "cs"
    }
]
myCoding.forEach((item) => {
    console.log(`${item.langname}, shortform is : ${item.langfile}`);
})
/*op:
javascript, shortform is : js
python, shortform is : py
style, shortform is : cs
*/

/*******filter*****/
const nums = [1, 2, 3,4,5,6,7,8,9,10]
let newNums = nums.filter((num) => num > 4)
console.log(newNums);     //op:(6) [5, 6, 7, 8, 9, 10]

//when used scope {} --write return keyword  : when we not write return it give the '[]' empty array
newNums = nums.filter((nums) => {return nums < 5});  
console.log(newNums);      //op:(4) [1, 2, 3, 4]


//always scope{} write with return
/******map *******/
const num1 = [10,20,30,40,50,60,70,80,90]
const newNums1 = num1.map((num) => num + 5)
console.log(newNums1);      //op: (9) [15, 25, 35, 45, 55, 65, 75, 85, 95]


//  chaining 
const newNums2 = num1.map((num)=> num * 10)
                     .map((num) => num + 10)
                     .filter((num) => num > 400)
console.log(newNums2);
//op:(6) [410, 510, 610, 710, 810, 910]


/*******reduce *********/
const num5 = [1,2,3,4,5]
const Total = num5.reduce(function(acc, curr){    //acc:accumilator, curr:current
    console.log(`acc:${acc} , curr:${curr}`);
    return acc + curr
}, 0)       //0-- denote acc start at 0 
console.log(Total);
/*op:
acc:0 , curr:1
acc:1 , curr:2
acc:3 , curr:3
acc:6 , curr:4
acc:10 , curr:5
15
*/
const Total1 = num5.reduce((acc,curr) => acc+curr,0)
console.log(Total1);    //op:15

//shopping system
const shopping =[
    {
        coursename:"js course",
        price: 999
    },
    {
        coursename:"html course",
        price: 2999
    },
    {
        coursename:"py course",
        price: 5999
    }
]
const Totalpay = shopping.reduce((acc,item) => acc + item.price ,0)
console.log(Totalpay);     //op:9997