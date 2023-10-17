// 1 改成 async await 表达 
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

const getData = async function (){
    try{
        const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())));
            console.log(users);
            console.log(posts);
            console.log(albums);
    }catch(err){
        console.log('oops',err);
    }
}

getData() // 可以拿到数据 


// 2 另外一个例子  promise
movePlayer(100, 'Left')
.then(() => movePlayer(400, 'Left'))
.then(() => movePlayer(10, 'Right'))
.then(() => movePlayer(330, 'Left'))


// 改成 async await 
async function playerStart(){
    await moveByPlayer(100, 'Left')
    await moveByPlayer(400, 'Left')
    await moveByPlayer(10, 'Right')
    await moveByPlayer(330, 'Left')
}