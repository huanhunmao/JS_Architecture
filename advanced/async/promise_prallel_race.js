// 1 parallel 同步并行 等全部完成
const promisify = (item,delay) => {
   return new Promise((resolve) => setTimeout(() => resolve(item),delay)) 
}

const a = () => promisify('a', 100)
const b = () => promisify('b', 5000)
const c = () => promisify('c', 30)

async function parallel(){
    const promises = [a(),b(),c()]
    // console.log('promises',promises); // promises [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]
    const [output1, output2, output3] = await Promise.all(promises)
    return 'result', `parallel is done: ${output1} ${output2} ${output3}`; // result parallel is done: a b c
}

parallel()

// 2 race 
async function race(){
    const promises = [a(),b(),c()]
    const output1 =  await Promise.race(promises)
    return `result race is done: ${output1}`
    // console.log(`result race is done: ${output1}`);
}

// race().then(console.log) // result race is done: c

// 3 sequence 顺序执行
async function sequence(){
    const output1 = await a()
    const output2 = await b()
    const output3 = await c()
    return `sequence is done: ${output1} ${output2} ${output3}`
}

parallel().then(console.log)
sequence().then(console.log) 
race().then(console.log) 












