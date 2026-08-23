/******class*****/
class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}123`
    }
    
}
const pass = new user("shreya","shree@gmail.com","shree")
console.log(pass.encryptPassword());     //op:shree123


/*****Inheritance*****/
//inherite property through parent to child class
class user2{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username is${this.username}`);
    }
}
class teacher extends user2{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;
    }
    addcourse(){
        console.log(`a new course is added by ${this.username}`);
    }
}
const usser = new teacher("satyam", "satyam@gmail.com","sattu123")
usser.addcourse();    //op:a new course is added by satyam


//static don't access any variable  in prpgram