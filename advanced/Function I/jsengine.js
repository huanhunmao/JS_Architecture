// 模拟 js 引擎做了什么事情  将代码拆开 
function jsEngine(code){
    return code.split(/\s+/)
}

const res = jsEngine('const a =  3')
console.log('res',res); // res [ 'const', 'a', '=', '3' ]