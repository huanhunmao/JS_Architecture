// 
const res = Math.abs(Math.abs(-20))
console.log('res', res); // res 20


function getValue(num){
    console.log(num); // 非纯函数 但是 非常独立  即使数据来自外部
}

getValue(20) // 20