// 1) new binding this 
function Person(name, age){
    console.log('this',this); // this Person {}
    this.name = name 
    this.age = age 
    console.log('this',this); // this Person { name: 'ppx', age: 18 }
}

const person = new Person('ppx', 18) // 相当于 Person 调用了 this  示例 person 指向的是 Person
console.log(person.name); // ppx
console.log(person.age); // 18

// 2) implicit binding 隐式绑定 
const person1 = {
    name: 'kk',
    age: 40,
    hi(){
        console.log(`hi ${this.name}`); // this 指向对象 person1 是因为 person1.hi 调用了这个函数，this 是哪里调用 就看哪里
    }
}

person1.hi() // hi kk 

// 3) explicit 显式绑定
const person3 = {
    name: 'pk',
    age:18,
    say: function(){
        console.log('hello ' + this.setTimeout); 
    }.bind(window) // 直接去拿 window 的 setTimeout 因为此处 默认拿的是 person3 的 setTimeout 为 undefined
}

person3.say() // hello function setTimeout() { [native code] }

// 4) arrow function 
const person4 = {
    name:'ww',
    age:12,
    say: function(){
        // function inner(){
        //     console.log('hi ' + this.name); // undefined
        // } 
        const inner = () => console.log('hi ' + this.name);  // hi ww  箭头函数 this 是固定的 外层作用域的 this

        return inner()
    }
}

person4.say() // hi ww