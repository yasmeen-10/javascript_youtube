//reduce()

const arr=[1,2,3,4]
// const res=arr.reduce(function(acc,curr){
//     console.log(`acc: ${acc} curr: ${curr}`);
    
//     return acc+curr
// },0)

// const res=arr.reduce((acc,curr)=>{
//     return acc+curr
// },0)
// console.log(res);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const total=shoppingCart.reduce((acc,curr)=>{
    return acc+curr.price
},0)
console.log(total);


