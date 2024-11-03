class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is : ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password
    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
        
    }
}
const chai=new Teacher("Yashu","yashu@gmail.com","123")
chai.addCourse();
chai.logMe()

const tea=new User("Tea")
tea.logMe()

console.log(chai === tea); //false
console.log(chai === Teacher); //false
console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); //true

