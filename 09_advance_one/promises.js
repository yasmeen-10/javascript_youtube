// const promiseOne=new Promise(function(resolve,reject){
//     //Do async task
//     //DB calls,cryptography,network calls
//     setTimeout(function(){
//         console.log("Async Task is Completed")
//         resolve()
//     },2000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async Task-2')
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name:"egofever",email:"egofever@gmail.com"})
//     },2000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:"Yasmeen",password:"123"})
//         }
//         else{
//             reject('ERROR: Something went wrong')
//         }
//     },2000)
// })

// promiseFour.then(function(user){
//     console.log(user)
//     return user.username
// }).then(function(username){
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>{
//     console.log("Promise is either resolved or rejected")
// })

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }
        else{
            reject('ERROR: Js went wrong')
        }
    },2000)
})

async function consumePromiseFive(){
    try {
        const response=await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.