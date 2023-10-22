// 静态数组(length 固定)  vs 动态数组

// 如何 实现 Array 
class MyArray {
    constructor(){
        this.length = 0;
        this.data = {}
    }

    get(index){
        return this.data[index];
    }

    push(item){
        // 添加到末尾 
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--;
        return lastItem;
    }

    delete(index){
        // const item  = this.data[index]  这个就是要删除的东西
        this.shiftItems(index)
    }

    shiftItems(index){  
        for(let i = index; i < this.length - 1; i ++){
            this.data[i] = this.data[i+1]; // 换位置
        }
        delete this.data[this.length - 1] // 删掉末尾项 并 length--
        this.length --
    }   
}

const myArray = new MyArray();
console.log(myArray.get(0)); //  undefined 啥都没添加
console.log(myArray.push('hello'));
console.log(myArray.push('hi'));
console.log(myArray.push('wawawa'));
// console.log(myArray.pop());
console.log(myArray.delete(2));
console.log(myArray); // MyArray { length: 3, data: { '0': 'hello', '1': 'hi', '2': 'wawawa' } }