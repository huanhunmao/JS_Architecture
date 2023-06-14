// 观察者模式  相当于一个圆桌，被观察者就是圆桌中间的东西
class Subject{//被观察者
    constructor(){
        this.state = '发光的黄金砖',
        this.arr = []
    }

    attach(observer){ // 将被观察者 都放进来
        this.arr.push(observer)
    }

    setState(newState){ // 状态变化 
        this.state = newState
        this.arr.forEach(observer => observer.updated(newState)) // 通知观察者 并执行更新方法
    }
}

class Observer { //观察者
    constructor(who){  // 这个其实非必要
        this.who = who
    }

    updated(newState){ // 观察者触发的方法
        console.log(this.who + ' ' + newState)
    }
}

const subject = new Subject()
const observer1 = new Observer('A')
const observer2 = new Observer('B')
subject.attach(observer1)
subject.attach(observer2)
// A changed
// B changed
subject.setState('changed')

