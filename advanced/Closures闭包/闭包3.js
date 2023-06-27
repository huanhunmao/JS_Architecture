// 1）再来一个练习
function callMe(){
    const me = 'I am me'
    setTimeout(function(){
        console.log('me',me);
    },3000)
}

callMe() // 3s 后打印 me I am me

// 2） 如果是这样呢 
function callMe2(){
    setTimeout(function(){
        console.log('me',me);
    },3000)
    const me = 'I am me'
}

callMe2() // 也可以打印出结果  此处没有变量提升 只是 setTimeout 放在 web api 会形成一个闭包 维持对 const me 的引用