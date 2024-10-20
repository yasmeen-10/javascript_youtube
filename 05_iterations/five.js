const coding=["python","ruby","java","cpp"]

// coding.forEach( function(item){
//     console.log(item);
    
// } )

// coding.forEach( (item)=>{
//     console.log(item);
    
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

//[{},{},{}]

const myArr=[
    {
        lang:"javascript",
        file:"js"
    },
    {
        lang:"java",
        file:"java"
    },
    {
        lang:"python",
        file:"py"
    }
]

myArr.forEach((item)=>{
    console.log(item.file);
    
})