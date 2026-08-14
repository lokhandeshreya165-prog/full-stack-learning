/**********day-1******/

function myname(){
    console.log("shreya");
    console.log("lokhande");
}
myname();        //op: shreya lokhande

function add(no1,no2){     //perameter--no1,no2
    console.log(no1 + no2);          //op: 11
}
add(5,6);    //fun call    --- argument


//create function
function addno(number1, number2){
    let result = number1 + number2;
    return result;
}
let value = addno(10,20);
console.log("result :" ,value );     //result : 30

//fun2
function loginuser(name){
    return `${name} just logged in`;     //$ -- used for string input
}
console.log(loginuser("shreya"));    //op:  shreya just logged in
console.log(loginuser());          //undefined just logged in   --- when no pass the input in fun call

//fun3
function loginuser1(name1 ){        //passed name1 = "shree" --give op :shree is logged in  & donot execute the if loop
    if(!name1 === undefined){
        console.log("please enter a username");
        return;
    }
    return `${name1} is logged in`;
}
console.log(loginuser1());    //op:  undefined is logged in
//console.log(loginuser1("shreya"));  -> //op: shreya is logged in  --when having value shree but paased the value always give pased value not default


/*********day-2*****/
function calcartprice(...num1){             // ...anyname it used as rest/spread operater -- combine all value in one array
    return num1
}
console.log(calcartprice(100,200,300,400));   //op: (4) [100, 200, 300, 400] in the array formate

//how to convert obj into fun
const user = {
    name : "shruti",
    age : 18
}
function handobj(anyobjt){
    console.log(`username is ${anyobjt.name} and having age is ${anyobjt.age}`)
}
handobj(user)      //op: username is shruti and having age is 18
handobj({
    name: "satyam",
    age: 9
})                  //op: username is satyam and having age is 9

const newarr = [200, 400, 100]
function retsecondval(getArray){
    return getArray[1]
}
console.log(retsecondval(newarr));      //op: 400