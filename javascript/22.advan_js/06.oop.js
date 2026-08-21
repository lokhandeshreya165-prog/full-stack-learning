//this. -- user for current context
const user= {
    username : "shreya",
    keyvalue: "shree123",
    login: true,

    getUserDetails: function(){
        console.log("get user detail from database");
        console.log(`username : ${this.username}`);      //op:username : shreya
        console.log(this);         //give all context --- op:{username: 'shreya', keyvalue: 'shree123', login: true, getUserDetails: ƒ}

    }
}
console.log(user.username);            //op:shreya  -- direct goto method
console.log(user.getUserDetails());      //undefined   --call the method
console.log(this);          //in global context give empty op: {}


//without declaration
function User(username, logincount, isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;
    return this
}
const user1 = new User("shreya", 5 ,true);
const user2 = new User("shruti", 7,false)
console.log(user1);           //op:{username: 'shreya', logincount: 5, isloggedin: true}
//when used new kwyword then avoid override value it always give fixed user1 value
console.log(user2);         //op:User {username: 'shruti', logincount: 7, isloggedin: false}


/********prototype**********/

//prototype inheritance 
//function -referece to objetc
function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2
console.log(multipleBy5(5));        //op:25
console.log(multipleBy5.power);      //op:2
console.log(multipleBy5.prototype);    //{}

