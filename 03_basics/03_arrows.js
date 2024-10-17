// const user={
//     username:"egofever",
//     price:200,
//     welcomeMsg:function()
//     {
//         console.log(`${this.username} ,Welcome to website`);
//         console.log(this);
        
        
//     }
// }
// // user.welcomeMsg()
// // user.username="Yasmeen"
// // user.welcomeMsg()

// console.log(this);


// function chai(){
//     let username="Yashu"
//     console.log(this.username);
    
// }
// chai()

// const chai=function(){
//     let username="egofever"
//     console.log(this.username);
    
// }
// chai()

const chai=()=>{
    let username="egofever"
    console.log(this);
    
}
// chai()


//BASIC ONE
// const add=(num1,num2)=>{
//     return num1+num2
// }


// const add=(num1,num2)=> num1+num2
// const add=(num1,num2)=> (num1+num2)

const add=(num1,num2)=> ({username:"EGO"})

console.log(add(21,4));
