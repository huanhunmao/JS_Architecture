// 一个对象 想使用 另外一个 对象的很多方法  如何操作 
// 第一个对象 dragon
let dragon = {
    name: 'ppx',
    fire: true, 
    fight(){
        console.log(999);
    },
    skill(){
        if(this.fire){
            console.log(`I am ${this.name}, I can fire`);
        }
    }
}

// dragon.fight() // 999 
// dragon.skill() // I am ppx, I can fire


// 第二个 比较弱的对象 lizard
let lizard = {
    name: 'kk',
    fight(){
        console.log(10);
    }
}

// 如何让 小蜥蜴获得 龙的能力 
lizard.__proto__ = dragon

// lizard.fight() // 10 自己有 就用自己的 没有像原型上查找
// lizard.skill()

// 比较瓜皮的是这样的 
// const lizardSkill =  dragon.skill.bind(lizard)
// lizardSkill()

// lizard.isPrototypeOf(dragon) //  false 
// dragon.isPrototypeOf(lizard) // true 这个对象 龙 是 蜥蜴的 原型  , isPrototypeOf 这个方法源于 Object 在对象上


for(let prop in lizard){
    console.log('lizard  prop and prototype prop', prop); // name, fight,fire,skill
    if(lizard.hasOwnProperty(prop)){
        console.log('lizard own prop', prop); // name, fight
    }
}

for(let prop in dragon){
    console.log('dragon  prop and prototype prop', prop); // name, fight,fire,skill
    if(dragon.hasOwnProperty(prop)){
        console.log('dragon own prop', prop); // name, fight,fire,skill
    }
}