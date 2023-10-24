// 实现数组 
class MyArray {
    constructor(){
        this.length = 0;
        this.data = {}
    }

    // const arr = [1,2,3,4,5,9]
    // arr[0]
    get(index){
        return this.data[index];
    }

    // arr.push(999)
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length
    }

    // arr.pop()
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length --
        return lastItem
    }

    // delete index
    delete(index){
        this.shiftItems(index)
    }

    // [1,2,3]
    shiftItems(index){
        for(let i = index; i < this.length; i ++){
            this.data[i] = this.data[i+1]
        }

        // 删除末尾项
        delete this.data[this.length-1]
        this.length --
    }
}

// test 
const arr = new MyArray()
// console.log(arr.get(0));
arr.push(1)
arr.push(2)
arr.push(3)
// arr.pop()
// console.log(arr.get(0));
arr.delete(1)
console.log(arr);