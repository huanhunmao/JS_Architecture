// 在 Date 上添加一个方法 lastYear()
Date.prototype.lastYear = function(){
    return this.getFullYear() - 1
}

const res1 = new Date().lastYear()
console.log('res1', res1); // res1 2022

const res2 = new Date('1900-11-11').lastYear()
console.log('res2', res2); // res2 1899