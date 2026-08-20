
//create promises
const prom1 = new Promise(function(resolve, reject){
    //do an async task
    //DB calls,cryptography, network call
    setTimeout(function(){
        console.log('Async task complete');
        resolve();      //call method  & connect to then
    },1000)
})
prom1.then(function(){
    console.log("promise consumed");
})


//2nd method -- without creating variable
new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log("async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("promise 2 resolve");
})

//3rd promise
const prom3 = new Promise(function(resolve,reject){
    setTimeout(function() {
        resolve({username:"shreya", email: "shreya@gmail.com", phone: "xxxxxxxx0911"})
    }, 1000);
})
prom3.then(function(user){
    console.log(user);      // op:{username: 'shreya', email: 'shreya@gmail.com', phone: 'xxxxxxxx0911'}

})

//promise 4
const prom4 = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true
        if (!error){
            resolve({username:"shreya", email: "shreya@gmail.com", phone: "xxxxxxxx0911"})
        }
        else{
            reject('ERROR:someting went wrong')
        }
    }, 1000);
})
prom4.then((user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

//promise5
const prom5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"shreya", password:"shree123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
//async function without a catch block don't work 
async function consumeprom5(){
    try{
        const response = await prom5
        console.log(response);
    }catch(error){
        console.log(error);    //op: ERROR: Something went wrong
    }
}
consumeprom5()


//async met6hod
async function getAllUser() {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
        const data = response.json()
        console.log(data)
    } catch (error) {
        console.log("E:",Error);
    }
}
getAllUser()

//another type -- directly fetch data 
fetch('https://api.github.com/users/lokhandeshreya165-prog')
.then((response)=>{
    return response.jspn()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))
