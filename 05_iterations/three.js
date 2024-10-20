//for of

// ["", "", ""]
// [{}, {}, {}]

//ARRAYS
const arr=[1,2,3,4,5]
for (const i of arr) {
    //console.log(i);
}


//STRINGS
const greetings="Hello World"
for(const greet of greetings){
    //console.log(`Each character is ${greet}`);   
}


// const obj={
//     name:"egofever",
//     age:22,
//     name:"egofever"
// }
// console.log(obj);


//MAPS

const map=new Map()
map.set('a',1)
map.set('b',2)
map.set('a',1)
//console.log(map);
//console.log(map.size);
//map.delete('a')
//console.log(map.size);

for(const [key,value] of map){
    //console.log(key , ':-' , value);  
}

const ob={
    name:"Yashu",
    age:22
}
for (const [key,value] of ob){
    console.log(key , ':-' , value);  
}
