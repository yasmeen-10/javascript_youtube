// function addTwoNumbers(a,b){
//     //console.log(a+b);
//     return a+b;
// }

// const res=addTwoNumbers(1,2)
// console.log(res)

// function loginUsermessage(username="Alice"){
//     if(!username){
//         console.log("Enter username");
//         return
//     }
//     return `${username} logged in just now`
// }

// console.log(loginUsermessage());

// REST OPERATOR
function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(12,11,13,22,221,33,44));

// passing objects to functions

// const user={
//     username:"egofever",
//     price:100
// }

// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);    
// }

// // handleObject(user)
// handleObject({
//     username:"Yasmeen",
//     price:199
// })

//PASSING ARRAYS TO FUNCTIONS
const arr=[12,"Yasmeen",22,33,55]
function handleArray(anyArray){
    console.log(anyArray[1]);
    
    console.log(`Array elements are ${arr}`);
    
}
handleArray(arr)
