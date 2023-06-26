// 非高阶 函数坏处   
// 1） error code 重复太多了 如果 每个人都 重复一遍 非常 可怕 
// function letPPXLogin(){
//     let arr = []
//     for(let i = 0; i < 100000000; i ++){
//         arr.push(i)
//     }

//     console.log('ppx has login'); 
// }

// function letZhangSanLogin(){
//     let arr = []
//     for(let i = 0; i < 100000000; i ++){
//         arr.push(i)
//     }

//     console.log('zhangsan has login'); 
// }

// letPPXLogin() // 需要等待 ppx has login
// letZhangSanLogin() // 需要等待 zhangsan has login


// 2） 更好一点的  通过传递参数的方式 简化了代码 
// const giveAccessTo = name => console.log('Access to ' + name); 

// function letUserLogin(user){
//     let arr = []
//     for(let i = 0; i < 100000000; i ++){
//         arr.push(i)
//     }

//     return giveAccessTo(user)
// }

// letUserLogin('ppx')
// letUserLogin('zhangsan')

// // 3-1） good code  高阶函数 初级版本   
// const giveAccessTo = name => console.log('Access to ' + name); 

// const  authenticate = function(val){
//         let arr = []
//         for(let i = 0; i < val; i ++){
//         arr.push(i)
//         }

//     return true
// }
// function letPersonLogin(person, fn){
//     if(person.level === 'admin'){
//         fn(500000)
//     }else if(person.level === 'user'){
//         fn(100000)
//     }

//     return giveAccessTo(person.name)
// }   

// letPersonLogin({level:'user', name:'Jack'}, authenticate) // Access to Jack
// letPersonLogin({level:'admin', name:'PPX'}, authenticate) // Access to PPX

// 3-2）高级版本  通用性更强 

function say(person){
    console.log(person.name + ' can say something');
}

function letPersonLogin(person, fn){
    if(person.level === 'admin'){
        fn(person)
    }else if(person.level === 'user'){
        fn(person)
    }
} 

letPersonLogin({level:'admin', name:'PPX'},say) // Jack can say something


