// 1) 写利于 编译器的代码 
function Point(x,y){
    this.x = x; 
    this.y = y 
}

const obj1 = new Point(1,2)
const obj2 = new Point(3,4)

obj1.a = 100
obj1.b = 200 

// bad 应该顺序和 obj1 一致 这样才利于编译器认识 并执行 
obj2.b = 300 
obj2.a = 400 



// 2) inline caching 内联缓存 
function findUser(user){
    return `found ${user.firstName} ${user.lastName}`
}

const userData = {
    firstName: 'ppx',
    lastName: 'cc'
}

findUser(userData) // found ppx cc 代码多次执行 结果都是这样 会进行缓存 不会每次都重新跑