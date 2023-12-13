// 1 In the ES 2017 standard, JavaScript introduced async and await keywords

// async function fetchPokemon() {
//     return { name: 'Pikachu' }
//   }
  
//   console.log(fetchPokemon()) // // prints Promise { <state>: "fulfilled", <value>: {name: 'Pikachu'} }

// // async 函数可接 then 使用 
//   fetchPokemon().then((resp) => console.log(resp)) // { name: 'Pikachu' }

// 2 await 会等待 For the await keyword, you can use it in an async function when you want to wait for Promise to be fullfiled
//  before moving to the next line.
// async function fetchPokemon() {
//     const resp = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     const pokemon = await resp.json()
//     console.log(pokemon)
//   }
   
//   fetchPokemon()

// 3 try catch 来捕获错误 
async function fetchPokemon() {
    try {        
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      const pokemon = await resp.json()
      console.log(pokemon)
    } catch (err) {    
      console.error(err)  
    }
  }