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