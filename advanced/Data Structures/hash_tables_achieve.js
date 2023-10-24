// 实现 hash table 
class MyHashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0 
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }

        return hash;
    }

    set(key, value) {
        // 生成一个 hash 地址 
        let address = this._hash(key)

        if(!this.data[address]){
            this.data[address] = []
        }

        this.data[address].push([key, value]) // 存值
        return this.data
    }

    get(key) {
        let address = this._hash(key)
        const currentBucket = this.data[address] // 找到 目标内存 空间

        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i ++){
                if(currentBucket[i][0] === key){ // 匹配目标 key
                    return currentBucket[i][1]
                }
            }
        }

        return undefined
    }

    // 获取值
    printValue() {
        const values = []
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                for( let j = 0; j < this.data[i].length; j ++){
                    console.log(this.data[i][j]);
                    // [ 'orange', 90 ]
                    // [ 'apple', 666 ]
                    // [ 'grapes', 6000 ]
                    // [ 'banana', 100 ]
                    values.push(this.data[i][j][1])
                }
            }
        }

        return values
    }
}

const myHashTable = new MyHashTable(50);
myHashTable.set('grapes', 6000)
myHashTable.set('apple', 666)
myHashTable.set('banana', 100)
myHashTable.set('orange',90)
console.log(myHashTable.get('banana')) // 1000
console.log(myHashTable.printValue()); // [ 90, 666, 6000, 100 ]