// 变量和函数提升问题 
var favoriteFood = '南瓜'
var favoriteThought = function() {
    console.log('original favorite food:' + ' ' + favoriteFood); // undefined

    var favoriteFood = '西瓜'
    console.log('new favorite food:' + ' ' + favoriteFood); // 西瓜
}

favoriteThought()

// 解释  var -> 提升
var favoriteFood = undefined
var favoriteThought = undefined

favoriteFood = '南瓜'

favoriteThought = function() {
    var favoriteFood = undefined
    console.log('original favorite food:' + ' ' + favoriteFood); // undefined

     favoriteFood = '西瓜'
    console.log('new favorite food:' + ' ' + favoriteFood); // 西瓜
}

favoriteThought()