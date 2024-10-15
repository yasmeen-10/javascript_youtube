// const tinderUser=new Object() //Singleton Object
// console.log(tinderUser);

// const tinder={} //Non Singleton Object
// console.log(tinder);

// const tinderUser={}

// tinderUser.id="123abc"
// tinderUser.name="egofever"
// tinderUser.isLoggedIn=false

// console.log(tinderUser);

// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}

// //const obj3={obj1,obj2}
// // const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3);


const course={
    course_name:'JavaScript',
    course_price:'999',
    course_instructor:"Hitesh"
}

//console.log(course.course_name,course.course_price,course.course_instructor);

const{course_name,course_price,course_instructor}=course
console.log(course_name,course_price,course_instructor);

