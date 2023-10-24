// 哈希表 非常快速 常规 时间复杂度 O(n) 但是 会存在放在一个地方的冲突 导致 查找变成 O(n/k) O(n) k 为大小
let user = {
    name: 'ppx',
    age: 19,
    thought: function () {
        console.log('can thought');
    }
}

user.age // O(1)
user.hasAd = true  // O(1)
user.thought() // O(1)


