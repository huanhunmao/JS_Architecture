// 1) a b 前面 都没有 什么 调用 this 所以 this 是 window  c.say() this 是 c
// const a = function(){
//     console.log('a',this);
//     const b = function(){
//         console.log('b',this);
//         const c = {
//             test:123,
//             say: function(){
//                 console.log('c', this);
//             }
//         }
//         c.say()
//     }
//     b()
// }
// a()

// 2) 
const obj = {
    name:'ppx',
    sing(){
        console.log('a', this);
        var anotherFunc = function(){
            console.log('b', this);
        }
        anotherFunc()
    }
}

obj.sing() // 只是调用了 obj 的 sing 方法  并没有 obj.xxx.anotherFunc() 调用这个 所以 sync function 默认指向 window 

// 如何解决这个问题 
//   2-1 箭头函数  绑定上层作用域的 this  即 obj1
const obj1 = {
    name:'ppx',
    sing(){
        console.log('a', this); // a {name: 'ppx', sing: ƒ}
        var anotherFunc = () => {
            console.log('b', this); // b {name: 'ppx', sing: ƒ}
        }
        anotherFunc()
    }
}

obj1.sing()

//   2-2 保存 this  self = this 
const obj2 = {
    name:'ppx',
    sing(){
        const self = this // this 指向 obj2 ，self则是保存了 this引用
        console.log('a', this); // a {name: 'ppx', sing: ƒ}
        var anotherFunc = function() {
            console.log('b', self); // {name: 'ppx', sing: ƒ}
        }
        anotherFunc()
    }
}

obj2.sing()

// 2-3 bind this 
const obj3 = {
    name:'ppx',
    sing(){
        console.log('a', this); // a {name: 'ppx', sing: ƒ}
        var anotherFunc = function() {
            console.log('b', this); // {name: 'ppx', sing: ƒ}
        }
        return anotherFunc.bind(this) //bind this 指向 obj3
    }
}

obj3.sing()()