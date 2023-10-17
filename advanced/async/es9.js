// 1 ... 
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
}

const {tiger, ...rest} = animals
console.log('tiger', tiger); // tiger 23
console.log('rest', rest); // rest { lion: 5, monkey: 2 }



const array = [1,2,3,4,5]
function sum(a,b,c,d,e){
    console.log(a + b + c + d + e); 
}

// 可以这样使用
sum(...array) // 15

// 2 finally 不管成功/失败 都会触发 

// 3 for await of 
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

const getData2 = async function(){
    const arrayOfPromises = urls.map(url => fetch(url))
    console.log('arrayOfPromises',arrayOfPromises); // arrayOfPromises (3) [Promise, Promise, Promise]
    for await (let request of arrayOfPromises){
        const data = await request.json()
        console.log('data',data);
    }
}
getData2() //  可以得到相同的结果