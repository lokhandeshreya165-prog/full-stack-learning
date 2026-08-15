/********this******/
// this : give the current context
//in-arrow fun don't having this keyword
const user = {
    name : "shree",
    age : 20,

    welcome: function(){
        console.log(`${this.name} , welcome to website`);   //this-used current context  
        console.log(this);      //  used-in global context  {name: 'shree', age: 20, welcome: ƒ} {name: 'shreya', age: 20, welcome: ƒ}
    }
}
user.welcome()    //op:shree , welcome to website
//change context
user.name = "shreya"
user.welcome()      //op:shreya , welcome to website

//node environment
console.log(this);    //op:{}  ---give empty becouse in node environment

/******arrow-fun*******/
function funname(){
    let username = "shruti"
    console.log(this);     //op: global {global: global, clearImmediate: ƒ, setImmediate: ƒ, clearInterval: ƒ, clearTimeout: ƒ, …}
    console.log(this.username);     //op: undefined   --- only work in object not funct

}
funname()

//arrow fun donot used this 
const data = function(){
    let username = "satyam"
    console.log(this.username);   //op: undefined
}
data()
//arrow-fun
const data1 = () => {
    let name = "satyam"
    console.log(this.name);   //op: undefined
    console.log(this);     //{} empty
}
data1()

//arrow-fun code
const add = (num1, num2, num3) => {
    return num1 + num2 + num3           //when {} used return always write
}
console.log(add(5,10,20))   //op:35

//way-2  :: implicit return 
const add1 = (num1, num2, num3) =>  num1 + num2 + num3
console.log(add1(5,10,20))   //op:35

//way-3 :: when usen paranthesis not write return keyword
const add3 = (num1, num2, num3) => (num1 + num2 + num3)
console.log(add3(5,10,20))   //op:35

