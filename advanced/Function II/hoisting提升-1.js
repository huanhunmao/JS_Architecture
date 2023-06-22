// 1） 变量和函数混合时 (非同名)
var favoriteFood = '南瓜'
var foodThought = function(){
    console.log('original favorite food' + ' '+ favoriteFood); // undefined

    var favoriteFood = '西瓜'
    console.log('new favorite food' + ' '+  favoriteFood); //  西瓜
}

foodThought()

// 第一个为啥 ？ 解释一下 
var favoriteFood = undefined
var foodThought = undefined

 favoriteFood = '南瓜'

 // 等于一个函数 但并未执行 
 foodThought = function(){
    console.log('original favorite food' + ' '+ favoriteFood); // undefined

    var favoriteFood = '西瓜'
    console.log('new favorite food' + ' '+  favoriteFood); //  西瓜
}

foodThought() // 执行函数 
foodThought = function(){
    var favoriteFood = undefined // 此时 非常清晰了 
    console.log('original favorite food' + ' '+ favoriteFood); // undefined

    // 这个地方有 var 被提升了
     favoriteFood = '西瓜'
    console.log('new favorite food' + ' '+  favoriteFood); //  西瓜
}



// 2）变量和函数混合时 (同名) 这个原因一样的
// var favoriteFood = '南瓜'
// var favoriteFood = function(){
//     console.log('original favorite food' + ' '+ favoriteFood); // undefined

//     var favoriteFood = '西瓜'
//     console.log('new favorite food' + ' '+  favoriteFood); //  西瓜
// }

// favoriteFood()


