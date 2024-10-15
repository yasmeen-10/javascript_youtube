//object constructor
//object.create()

//object literals

// const mySym=Symbol("key1")

// const jsUser={
//     [mySym]:"myKey1",
//     "full name":"Mohammed Yasmeen",
//     name:"egofever",
//     age:21,
//     email:"mohammedyasmeen@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday","Friday"]
// }

// console.log(jsUser.email);
// console.log(jsUser['name']);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof [mySym]);

const sym=Symbol("key")

const user={
    [sym]:"myKey",
    name:"Yasmeen"
}
// console.log(user[sym]);
// console.log(typeof user[sym]);
// console.log(typeof sym);

// user.name="egofever"
// console.log(user['name']);
// Object.freeze(user)
// user.name="Yashu"
// console.log(user['name']);
// console.log(user);

user.greeting=function(){
    console.log("Hello");    
}
console.log(user.greeting());

user.greetingTwo=function(){
    console.log(`Hello I am ${this.name}`); 
}
console.log(user.greetingTwo());










