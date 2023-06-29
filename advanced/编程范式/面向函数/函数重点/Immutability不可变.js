// 函数拿到 值 不应该改变 它  而影响到 外部 其他部分的调用 
// 而是应该 在 内部拷贝 一份 使用 并做一些 处理 不改变 外面的值

const obj = {name : 'ppx'}
function cloneObj(obj){ // 浅拷贝一层
    return {...obj}
}

function updatedObj(obj){
    const obj2 = cloneObj(obj)
    obj2.name = 'kk'

    return obj2
}

console.log('origin obj name', obj.name ); // origin obj name ppx
updatedObj(obj)
console.log('updated obj name', obj.name); // origin obj name ppx
const obj2 = updatedObj(obj)
console.log('obj2', obj2.name); // kk