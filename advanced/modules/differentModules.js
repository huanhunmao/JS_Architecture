// 1 es modules --> 前端项目

// math.js
export function add (a,b){
    return a + b 
}

// app.js
import * as math from './math.js'
console.log(math.add(2,3));


// 2 Commonjs modules --> nodejs
module.export = {
    add: function (a,b){
        return a + b
    }
}

// app.js
const math = require('./math.js')
console.log(math.add(2,3));


// 3 AMD modules --> Requirejs 在前端之前因为异步常用 后来被 es6 取代

// math.js
define([], function(){
    return {
        add: function (a,b){
            return a + b
        }
    }
})

// app.js
require(['math',function(math){
    console.log(math.add(2,3));
}])