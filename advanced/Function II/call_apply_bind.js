// 1) call apply bind 是函数上的属性 
function test(){

};

// 2) 函数调用 xxx() 其实是 xxx.call() 的缩写

// 3) 使用
const wizard = { // 巫师
    name: 'ppx',
    health:30,
    heal(num1, num2){ // 恢复
        this.health += num1 + num2
        console.log(this.health);
    }
}

const archer = { // 弓箭手
    name: 'gg',
    health:30
}

console.log(wizard.heal());  // 100

console.log('1',archer); // 1 { name: 'gg', health: 30 }
// wizard.heal.call(archer,30,50);
// wizard.heal.apply(archer,[30,50])
const func = wizard.heal.bind(archer,30,50)
console.log('func', func); // func [Function: bound heal]
func()
console.log('2',archer); //2 { name: 'gg', health: 110 } 成功恢复了哈哈

const res = archer.call(wizard);
console.log('res',res); // TypeError: archer.call is not a function
