// 写一下 LRU 可缓存一些数据 如果有新数据 会将未访问的旧数据去除 

// Web 缓存：在 Web 开发中，可以使用 LRU 缓存来缓存经常访问的静态资源，如图片、样式表和脚本文件。这样可以减少服务器的负载，并提高页面加载速度。

// 数据库查询缓存：在数据库查询中，可以使用 LRU 缓存来存储查询结果。如果相同的查询再次出现，可以直接从缓存中获取结果，减少数据库访问次数，提高查询性能。

// 常用数据缓存：在某些应用中，有一些经常使用的数据，如配置信息、用户权限等，可以使用 LRU 缓存来缓存这些数据，避免频繁的查询或计算操作。

// 图片缓存：在移动应用程序中，可以使用 LRU 缓存来缓存用户最近浏览的图片，以便快速加载和显示。

// 缓存计算结果：在某些计算密集型任务中，如果计算结果被多次使用，可以使用 LRU 缓存来缓存计算结果，避免重复计算。
class LRUCache{
    constructor(capacity) {
        this.capacity = capacity // 容量设置 
        this.cache = new Map() // 键值对形式存储 
    }

    get(key){
        if(this.cache.has(key)){
            const value = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, value) // 将访问的键值对放在最末尾，表示最近使用
            // console.log('value', value); // 1  2
            return value
        }

        return -1
    }

    put(key, value){
        if(this.cache.has(key)){
            this.cache.delete(key) // 直接删除 旧的 
        }else if(this.cache.size >= this.capacity){ // 注意 ： 超出或者等于容量
            const unusedKey = this.cache.keys().next().value // 获取第一个键（最久未使用）
            console.log('unusedKey',unusedKey); // unusedKey C
            this.cache.delete(unusedKey)
        }

        // 设置新的键值对
        this.cache.set(key, value)
    }
}

const cache = new LRUCache(3)
cache.put('A',1)
cache.put('B',2)
cache.put('C',3)

console.log(cache.get('A'));
console.log(cache.get('B'));

cache.put('D',4)
console.log('cache', cache); // cache: Map(3) { 'A' => 1, 'B' => 2, 'D' => 4 }
console.log(cache.get('C')); // -1

