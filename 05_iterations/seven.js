// const arr=[1,2,3,4,5]
// const newArr=arr.map((item)=>{
//     return item+10
// })
// console.log(newArr);
// console.log(arr);



//using forEach
// const array=[]
// arr.forEach((item)=>{
//     return array.push(item+10)
// })

// console.log(array);

//CHAINING

const arr=[1,2,3,4,5]
const newArr=arr.map((item)=>{
    return item*10
}).map((item)=>{
    return item+1
}).filter((item)=>{
    return item>20
})

console.log(newArr);




