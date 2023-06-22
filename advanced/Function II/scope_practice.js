// Scope:
// function sayMyName() {
//     var a = 'a';
//     return function findName() {
//       var b = 'b';
//     //   console.log(c)
//       return function printName() {
//         var c = 'c';
//        console.log('ppx');
//       }
//     }
//   }
  
//   sayMyName()()() // ppx
  
  function findName() {
    var b = 'b';
    return printName();
  }
  
  function printName() {
    var c = 'c'
    console.log('ppx2');
  }
  
  function sayMyName() {
    var a = 'a';
    return findName()
  }
  
  sayMyName() // ppx2