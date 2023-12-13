// JavaScript promises

// 1 Promise can have 3 states:

// fulfilled - Success, promise has been resolved
// rejected - Fail, promise has been rejected
// pending - Default state before being resolved or rejected

// const resolvedPromise = new Promise((resolve, reject) => {
//     resolve('I am resolved!')
//   })
//   // Promise { <state>: "fulfilled", <value>: "I am resolved!" }
  
  
//   const rejectedPromise = new Promise((resolve, reject) => {
//     reject('I am rejected!')
//   })
//   // Promise { <state>: "rejected", <reason>: "I am rejected!" }
  
  
//   const promise = new Promise((resolve, reject) => {})
//   // Promise { <state>: "pending", value: undefined }



//   2 Functions you can use to consume a Promise:

//   .then() - handles resolve scenario, will execute onFullfiled function asynchronously
//   .catch() - handles reject scenario, will execute onRejected function asynchronously
//   .finally() - handles scenario when Promise is settled, this is execute onFinally function asynchronously

// const choosePPX = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('PPX'), 2000)
//   })
  
  
//   choosePPX.then((response) => {
//     console.log(response)
//   })

// chain 链接 promise 
// const choosePPX = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('PPX'), 2000)
//   })
//   choosePPX
//   .then((firstForm) => {
//     // Return a new value for the next .then
//     return firstForm + ' evolves to Raichu!'
//   })
//   .then((secondForm) => {
//     console.log(secondForm)
//   })

// fetch data  去浏览器看结果 
// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//   .then((resp) => {
//     return resp.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.error(err)
//   })


// reject error
  function getPokemons(isSuccess) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
        if (isSuccess) {        
          resolve([          
            { id: 1, name: 'Bulbasaur' },          
            { id: 2, name: 'Charmander' },          
            { id: 3, name: 'Squirtle' },        
          ])      
        } else {        
          reject('An error occurred on fetching pokemons!')      
        }    
        }, 3000)  
     })
  }
  
  getPokemons(false)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
  