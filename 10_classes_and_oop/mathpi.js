
// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI);

const descriptor=Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(descriptor);

const chai={
    name:"gingerChai",
    price:250,
    isAvailable:true,
    oderChai:function(){
        console.log("Chai nahi bani");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    //writable:false,
    enumerable:true
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (let [key,value] of Object.entries(chai)) {
    if(typeof value!=='function'){
        console.log(`${key} : ${value}` ); 
    }
}
