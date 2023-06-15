// 数组模拟 队列 实现消息队列 
class MessageQueue{
    constructor(){
        this.queue = []
    }

    // 入队
    enqueue(message){
        this.queue.push(message)
    }

    // 出队
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        return this.queue.shift()
    }

    isEmpty(){
        if(this.queue.length === 0){
            return true
        }
        return false
    }

    // 队首
    peek(){
        return this.queue[0]
    }

    size(){
        return this.queue.length
    }

    clear(){ // 清空
        this.queue = []
    }
}

const queue = new MessageQueue();
queue.enqueue('Message 1');
queue.enqueue('Message 2');
queue.enqueue('Message 3');

console.log(queue.dequeue('Message 1'));  // Message 1
console.log(queue.peek()); // Message 2
console.log(queue.size()); // 2

queue.clear();
console.log(queue.size()); // 0