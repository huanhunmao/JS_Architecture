// 1 同步执行  
// function chooseBulbasaur() {
//     console.log('I choose you Bulbasaur!')
//   }
  
//   function chooseCharmander() {
//     console.log('I choose you Charmander!')
//   }
  
//   function chooseSquirtle() {
//     console.log('I choose you Squirtle!')
//   }
  
//   chooseBulbasaur()
//   chooseCharmander()
//   chooseSquirtle()
  
  // prints:
  // I choose you Bulbasaur!
  // I choose you Charmander!
  // I choose you Squirtle!



  // 2 添加 setTimeout
//   function chooseBulbasaur() {
//     console.log('I choose you Bulbasaur!')
//   }
  
//   function chooseCharmander() {
//     setTimeout(() => {
//       console.log('I choose you Charmander!')
//     }, 0)
//   }
  
//   function chooseSquirtle() {
//     console.log('I choose you Squirtle!')
//   }
  
//   chooseBulbasaur()
//   chooseCharmander()
//   chooseSquirtle()

  // prints:
// I choose you Bulbasaur!
// I choose you Squirtle!
// I choose you Charmander!

// queue
// JavaScript also uses a Queue (task queue) in the background. You can imagine the Queue as the lounge or waiting room for functions,
//  while Stack is the office of JavaScript. When the Stack is empty,
//   JavaScript will check if there is something in the Queue. If a Stack is empty and something is in the Queue,
//    JavaScript will call it and execute it.


// 3 JavaScript callbacks
// function chooseBulbasaur() {
//     console.log('I choose you Bulbasaur!')
//   }
  
//   function chooseCharmander(callback) {
//     setTimeout(() => {
//       console.log('I choose you Charmander!')
      
//       // execute callback function
//       callback()
        
//     }, 0)
//   }
  
//   function chooseSquirtle() {
//     console.log('I choose you Squirtle!')
//   }
  
//   chooseBulbasaur()
//   chooseCharmander(chooseSquirtle)


// 4 Callback hell  层层 向内 
function pyramidOfDoom() {
    setTimeout(() => {
      console.log('I choose you Bulbasaur!')
      setTimeout(() => {
        console.log('I choose you Charmander!')
        setTimeout(() => {
          console.log('I choose you Squirtle!')
        }, 300)
      }, 1200)
    }, 600)
  }
  
  pyramidOfDoom()

  // prints:
// I choose you Bulbasaur!
// I choose you Charmander!
// I choose you Squirtle!