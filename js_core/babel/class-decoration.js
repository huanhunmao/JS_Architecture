// // 1）装饰器可以修饰类的静态属性
// @flag
// class Animal{
//     name = 'xxxx';
//     say(){

//     }
// }

// function flag(constructor){
//     // constructor: function Animal() {
//     //     _classCallCheck(this, Animal);
//     //     _defineProperty(this, "name", 'xxxx');
//     //   }
//     console.log('constructor: ' + constructor);
//     constructor.age = 10;
// }

// console.log('Animal',Animal.age); // Animal 10


// 2）装饰器可以修饰类的实例属性

// class Animal{
//     @readyOnly
//     PI = 3.14
//     name = 'xxxx'; // 实例上的属性 并非原型链上的属性
//     say(){
//         console.log('object');
//     }
// }

// // target {}
// // property PI
// // descriptor {
// //   configurable: true,
// //   enumerable: true,
// //   writable: true,
// //   initializer: [Function: initializer]
// // }
// function readyOnly(target,property,descriptor){
//     // console.log('target', target);
//     // console.log('property', property);
//     // console.log('descriptor', descriptor);

//     // console.log(target === Animal.prototype); // 这个时候类未执行完成 .prototype 没有值
//     // setTimeout(function(){
//     // //   console.log( target === Animal.prototype);  // true
//     // })
//     descriptor.writable = true;
// }

// let ppx = new Animal();
// ppx.PI = 6
// console.log(ppx.PI); // 6

// 3) 函数 执行前触发  类似生命周期 ？

// class Animal{
//     name = 'xxxx';
//     @before()
//     say(a,b,c){
//         console.log('say google',a,b,c);
//     }
// }

// function before(target,property,descriptor){
//     const oldSay = descriptor.value  // 旧函数
//     descriptor.value = function(){  // 新函数
//         console.log('before');
//         oldSay.call(target,...arguments)
//     }
// }

// let ppx = new Animal();
// // before
// // say google 1 2 3
// ppx.say(1,2,3) 

// 3-1) 传参数 第二种方式 创一个 工厂函数 

class Animal{
    name = 'xxxx';
    @before(1,2,3)
    say(a,b,c){
        console.log('say google',a,b,c);
    }
}

function before(...parm){
    return function(target,property,descriptor){
        const oldSay = descriptor.value  // 旧函数
        descriptor.value = function(){  // 新函数
            console.log('before');
            oldSay.call(target,...parm)
            return target
        }
    }
}

let ppx = new Animal();
// before
// say google 1 2 3
ppx.say() 