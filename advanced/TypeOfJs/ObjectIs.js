const res = Object.is(NaN, NaN)
console.log('res', res); // res true

const res1 = Object.is(+0, -0)
console.log('res1', res1); // res1 false