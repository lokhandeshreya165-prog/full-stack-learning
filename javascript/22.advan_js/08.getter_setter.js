class user {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        return `${this._password}shreya`
    }
    set password(value){
        this._password = value
    }
}

const shreya = new user("Shreya@gmail.com","123")
console.log(shreya.password);
