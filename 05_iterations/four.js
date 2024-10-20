const obj={
    js:"javascript",
    rb:"ruby",
    py:"python",
    cpp:"c++"
}
for (const i in obj) {
    //console.log(obj[i]);  
    //console.log(`${i} shortform is ${obj[i]}`); 
}

const arr=[1,2,3,4,5]
for(const i in arr){
    //console.log(arr[i]);
}

const map=new Map()
map.set('a',1)
map.set('b',2)
map.set('a',1)

for (const key in map) {
   console.log(key);
   
}