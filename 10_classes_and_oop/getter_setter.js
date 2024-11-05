class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email=value
    }

    get password(){
        return `${this._password} egofever`
    }
    set password(value){
        this._password=value
    }
}
const obj=new User("egofever@gmail.com","abc")
console.log(obj.password);
console.log(obj.email);

