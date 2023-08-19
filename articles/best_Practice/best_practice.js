// link : https://www.freecodecamp.org/news/javascript-tips-for-better-web-dev-projects/#tip18usethemapmethodtotransformalltheelementsofanarray

//  Tip 1: Use console.table() to Display Arrays and Objects in the Console
// arr
const myArr = ['Kolade', 'Chelsea', 10, true];

// console.log(myArr);
// console.table(myArr);

// obj 
const myObj = {
    name: 'ppx',
    age: 18,
    skills: true
}
// console.log(myObj);
// console.table(myObj);


// Tip 2: Use Template Interpolation to Render Strings Instead of the Assignment Operator
const name = 'John Doe';
const age = 20;

const plusConcat =
  'Hi there 👋🏽 \nMy name is ' + name + ' and I am ' + age + ' years old.';

const templateLiteralConcat = `Hi there 👋🏽 \nMy name is, ${name} and I am ${age} years old.`;
// console.log('plusConcat',plusConcat);
// console.log('templateLiteralConcat',templateLiteralConcat);

// Tip 3: Convert Strings to Numbers with Unary Plus and Number Constructor 
const myNum = '666';

convertNum1 = +myNum;
convertNum2 = Number(myNum);

// console.log(convertNum1, typeof convertNum1); // 666 'number'
// console.log(convertNum2, typeof convertNum2); // 666 'number'

// Tip 4: You Don’t Need to Declare Every Variable with a Keyword
// 常规这样声明 多个变量 
let x,y,z 
x = 1
y = 2 
z = 3
// console.log(x,y,z); // 1 2 3

// 可以直接声明 
const xx = 111, yy = 222, zz = 333
// console.log(xx, yy, zz); // 111 222 333

// Tip 5: Use console.group() with Multiple console.log()s to Group Related Itmes to the Console
// console.log('Messages:');
// console.log('my name is ppx');
// console.warn('warning');
// console.error('error');
// console.groupEnd()
// Messages:
// my name is ppx
// warning
// error

// Tip 6: Style your Console Output with the %c Specifier 可以上色打印出来会带上样式
const styles = `padding: 15px;
                background-color: #2ecc71;
                color: black`;
                // console.log('%c Hello, Everyone!', styles);
// or
                // console.log(
                //     '%c Hello, Everyone!',
                //     'padding: 15px; background-color: #2ecc71; color: black'
                //   );

// Tip 7: How Math.floor(Math.random() * n1 + n2) Generates a Random Number Between n1 and n2
const myRandom = Math.floor(Math.random() * 100 + 1)
// console.log(myRandom); // myRandom

// Tip 8: Methods of the Math Object 一些有用的数学方法  
// 平方根
// console.log(Math.sqrt(9))
// // 绝对值
// console.log(Math.abs(-3));
// // 四舍五入
// console.log(Math.round(3.6)); // 4
// console.log(Math.round(3.1)); // 3
// // 向上取整
// console.log(Math.ceil(3.3)); // 4
// // 向下取整
// console.log(Math.floor(3.7)); // 3
// // 指数 n ^ xxx
// console.log(Math.pow(2,3));
// // 最小
// console.log(Math.min(3,2,1));
// // 最大
// console.log(Math.max(3,2,1));
// // 0-1 随机数 
// console.log(Math.random());
// // n1(1) - n2(100) 随机数
// console.log(Math.floor(Math.random() * 100, 1)); // 1-100

// Tip 9: Capitalize the First Letter of Any Word
const str = 'ppx'
const capitalizeStr = str.charAt(0).toUpperCase() + str.slice(1)
// console.log(capitalizeStr); // Ppx


// Tip 10: Destructure Arrays with Default Values to Avoid Getting undefined
let persons = ['Jack', 'John']
let [firstOne, secondOne,thirdOne] = persons
// console.log(firstOne, secondOne,thirdOne); // Jack John undefined
// 如何消除这个 undefined
// console.log(firstOne, secondOne,thirdOne = 'OwnOne') // Jack John OwnOne

const person = { name1: 'John Doe', age1: 30 };
const { name1, age1, occupation } = person;
// console.log(name1, age1, occupation); // John Doe 30 undefined
// with the default values
const {firstName = 'Ppx', lastName = 'Cg', gender = 'Male'} = person;
// console.log(firstName,lastName, gender); // Ppx Cg Male

// Tip 11: Use the Spread Operator to Copy and Merge Arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]

// merge the two arrays
const newArray = [4,5,6]
const mergedArray = [...originalArray, ...newArray]
// console.log('mergedArray',mergedArray); // mergedArray [ 1, 2, 3, 4, 5, 6 ]

// obj
const obj1 = {name: 'ppx'}
const obj2 = {age: 18}
let newObj = {...obj1, ...obj2}
// console.log('newObj', newObj); // newObj { name: 'ppx', age: 18 }
newObj.name = 'xxxx'
// console.log(newObj); // { name: 'xxxx', age: 18 } 更改后原对象没变
// console.log(obj1); // { name: 'ppx' }

// function
function addNums(a,b,c){
    return a + b + c 
}

const numbers = [11,2,13]
const res = addNums(...numbers)
// console.log('res',res); // res 26

// Tip 12: Use Arrow Syntax to Write Shorter and More Elegant Functions
function add(a,b){
    return a + b
}
const add2 = (a,b) => a + b

const arr = [1,2,3,4,5,6,7,8]
arr.map(function(item){
    return item * 2
})

arr.map(item => item * 2)

// Tip 13: Use Destructuring to Extract Properties from Objects
const person3 = {
    name5: 'John',
    age5:19,
    gender5: 'Female'
}

// 传统方式 
const namex = person3.name5 
const agex = person3.age5 
const genderx = person3.gender5

// 解构 
const {name5, age5, gender5} = person3
// console.log(name5, age5,gender5); // John 19 Female

// arr 
const arr5 = [1,2,3]
const [one, two,three] = arr5
// console.log(one, two,three); // 1 2 3

// Tip 14: Use the startsWith() and endsWith() String Methods to Get the Start and End of a String
const message = 'Hello world';
// console.log(message.startsWith('H')); // true
// console.log(message.startsWith('h')); // false
// console.log(message.endsWith('D')); // false
// console.log(message.endsWith('d')); // true

// 做筛选  filter 
const files = [
    'text.txt',
    'document.txt',
    'image.jpg',
    'script.js',
    'docs.txt',
  ];
// 把 .txt 结尾的筛选出来
const textFiles = files.filter(file => file.endsWith('.txt'))
// console.log(textFiles); // [ 'text.txt', 'document.txt', 'docs.txt' ]

//  support optional start and end positions to limit the range of the string
const text = 'Welcome to Dry Alliance'; // 德莱联盟
// console.log(text.startsWith('t',8)); // true
// console.log(text.startsWith('Dry',11)); // true
// console.log(text.endsWith('e',23)); // true

// Tip 15: Use the trim(), trimStart(), and trimEnd() to Handle White Spaces
// const greet = '   Hello world!   ';
// console.log(greet); //    Hello world!   

// const greet2 = greet.trim();
// console.log(greet2); // Hello world!

// const greet3 = greet.trimStart()
// console.log(greet3); // Hello world!   

// const greet4 = greet.trimEnd()
// console.log(greet4); //    Hello world!

// Tip 16: Use replace() with the toUpperCase() and toLowerCase() Methods to Convert Between Cases
const toTitleCase = str => str.toLowerCase().replace(/(^|\s)\w/g, match => match.toUpperCase())
// const toTitleCase = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// console.log(toTitleCase('welcome to twitter (now x)!')) // Welcome To Twitter (now X)!

// Tip 17: Use the Array.from() Method to Create Arrays from Array-like Objects or Iterables
// arguments只在普通函数内部有效 此处使用箭头函数不行
function sumArguments  () {
    // The "arguments" object is array-like
    // console.log('arguments',arguments);
    // arguments [Arguments] {
    //     '0': 1,
    //     '1': 2,
    //     '2': 3,
    //     '3': 4,
    //     '4': 5,
    //     '5': 6,
    //     '6': 7,
    //     '7': 8,
    //     '8': 9
    //   }
    const argsArray = Array.from(arguments)
    return argsArray.reduce((acc, arg) => acc + arg, 0)
}

// console.log(sumArguments(1,2,3,4,5,6,7,8,9)); // 45

// 如果用在 dom 中这样的 
{/* <ul>
   <li>List item 1</li>
   <li>List item 2</li>
   <li>List item 3</li>
   <li>List item 4</li>
</ul> */}

// const listItems = document.querySelectorAll('li')
// const itemArray = Array.from(listItems)

// itemArray.forEach(item => {
//     console.log(item.textContent);
// })

// Tip 18: Use the map() Method to Transform all the Elements of an Array
const arr18 = ['ppx', 'acc', 'pcc']
const res18 = arr18.map(item => item.toUpperCase())
// console.log('res18',res18); // res18 [ 'PPX', 'ACC', 'PCC' ]

// 页面渲染也经常使用到 map 
{/* <ul id="item-list"></ul> */}

const items = ['items1', 'items2', 'items3', 'items4']
// 这个是 ul 的 ID
// const itemsList = document.querySelectorAll('#item-list')
// const liElement = items.map(item => {
//     const li = document.createElement('li')
//     li.textContent = item
//     li.style.color = 'red'
//     return li
// })

// // 将 li append 到 ul 里面
// liElement.forEach(li => {
//     itemsList.appendChild(li)
// } )


// Tip 19: Use the filter() Method to Filter Through Arrays
const nums = ['a', 'b', 'c', 'd', 'e']
const IWant = nums.filter(item => item === 'a' || item === 'b' )
// console.log(IWant); // [ 'a', 'b' ]

// 第二个比较贴近业务场景 
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 30 },
    { id: 4, name: 'Headphones', price: 10 },
  ];

  const cheaperProduct = products.filter(product => product.price < 500)
//   console.log(cheaperProduct);
//   [
//     { id: 3, name: 'Tablet', price: 30 },
//     { id: 4, name: 'Headphones', price: 10 }
//   ]

// Tip 20: Use the forEach() Method to Loop Through Arrays
const fruits = ['apple', 'banana', 'orange'];

// with for loop 
for(let i = 0; i < fruits.length; i++){
    // console.log(fruits[i]); // 'apple', 'banana', 'orange'
}

// use forEach 
// fruits.forEach(item => console.log('item',item));
// item apple
// item banana
// item orange

// Tip 21: Use the Web Audio API to Work with Audio Files
// look at Audio.html

// Tip 22: Use the Web Video API to Work with Video Files
// look at Video.html

// Tip 23: Preserve Object Integrity by Sealing and Freezing Them
const obj123 = {
    luckyNum: 10,
  footballFan: true,
  club: 'Chelsea',
}
// Object.seal() 允许修改属性值，但不能添加或删除属性
Object.seal(obj123)
obj123.luckyNum = 1111
obj123.hobby = 'Hobby' // 添加无效
// console.log('obj123',obj123); // obj123 { luckyNum: 1111, footballFan: true, club: 'Chelsea' } 
delete obj123.luckyNum // 删除无效 
// console.log(obj123); // { luckyNum: 1111, footballFan: true, club: 'Chelsea' }

const obj223 = {
    luckyNum: 11,
  footballFan: false,
  club: 'JC',
}
// Object.freeze() 阻止了添加、删除和修改属性值的操作
Object.freeze(obj223)

// console.log(Object.isSealed(obj123)); // true
// console.log(Object.isFrozen(obj223)); // true

// Tip 24: Use async...await For Asynchronous Operations
// 使用 promise 
// function fetchData(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(`There was an error fetching: ${err}`));
// }

async function fetchData2(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
}

// better error handling try--- catch 
async function fetchData3(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }catch(err){
        console.error(err);
    }
}

// arrow functions
const fetchData4 = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`There was an error: ${error}`);
    }
  };



// Tip 25: Clone Objects with the Spread Operator, Object.assign(), and JSON.parse()
const originalObject = {
    name: 'Kolade',
    luckyNum: 10,
    isFootballFan: true,
    club: 'Chelsea',
  };

// 第一种克隆方式  clone with spread operator
const clonedObject1 = {...originalObject};
// console.table(clonedObject1);
// ┌───────────────┬───────────┐
// │    (index)    │  Values   │
// ├───────────────┼───────────┤
// │     name      │ 'Kolade'  │
// │   luckyNum    │    10     │
// │ isFootballFan │   true    │
// │     club      │ 'Chelsea' │
// └───────────────┴───────────┘

// 第二种方式  Object.assign
const clonedObject2 = Object.assign({}, originalObject)
// console.log('clonedObject2',clonedObject2); // clonedObject2 { name: 'Kolade', luckyNum: 10, isFootballFan: true, club: 'Chelsea' }

// 第三种方式 
const clonedObject3 = JSON.parse(JSON.stringify(originalObject));
// console.log(clonedObject3); // as some like above

// a deep clone of an object with the structuredClone()
// const clonedObject4 = structuredClone(originalObject)
// console.log(clonedObject4);


// Tip 26: Remove Duplicates from an Array with Set and Map
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const  uniqueArray = [...new Set(arrayWithDuplicates)]
// console.log(uniqueArray); // [ 1, 2, 3, 4, 5 ]

// create unique arrays with Map()
const fruitsWithDuplicates2 = [
    'Mango',
    'Cashew',
    'Barley',
    'Mango',
    'Barley',
    'Berry',
    'Cashew',
]
const uniqueFruitsWithDuplicates2 = [
    ...new Map(fruitsWithDuplicates2.map(item => [item,true])).keys()
]
// console.log(uniqueFruitsWithDuplicates2); // [ 'Mango', 'Cashew', 'Barley', 'Berry' ]

// Tip 27: Map Through and Array and Flatten it with the flatMap() Method
const numberss = [1, 2, 3, 4, 5];
const doubledAndSquared = numberss.map(number => [number * 2, number * number ])
// console.log(doubledAndSquared);
const flatMap = doubledAndSquared.flat() // 只能拍平一层 
// console.log(flatMap);//  [2, 1, 4, 4, 6, 9, 8, 16, 10, 25]

// 如果想拍平 多层怎么操作 ?
const arrs = [1,2,3,[4,5,[6,7]]]
function flatMapPlus(arr){
    if(!arr.length) return arr 
    let res = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] instanceof Array){
            // flatMapPlus(arr[i]) // error  没有将返回的结果合并到 res 数组中
            res = res.concat(flatMapPlus(arr[i]))
        }else{
            res.push(arr[i])
        }
    }

    return res
}

const ress = flatMapPlus(arrs)
// console.log(ress); 
// [
//     1, 2, 3, 4,
//     5, 6, 7
//   ]


// Tip 28: Use the padStart() and padEnd() Methods to Pad a string with a Character
const originalString = 'Hello';
const paddedStart = originalString.padStart(10,'*')
// console.log(paddedStart); // *****Hello

const paddedEnd = originalString.padEnd(10,'-')
// console.log(paddedEnd); // Hello-----

const paddedText = originalString.padStart(10,'+') + ' ' + originalString.padEnd(10,'-')
// console.log(paddedText);  // +++++Hello Hello-----


// 整齐打印出来 
const productss = [
    { name: 'Apples', price: 1.5 },
    { name: 'Bananas', price: 0.75 },
    { name: 'Oranges', price: 2 },
  ];

  console.log('Product      Price');
  console.log('-------------------');

  productss.forEach(({name, price}) => {
    const padName = name.padEnd(10, '  ')
    const padPrice = price.toFixed(2).padStart(8, '  ')
    console.log(`${padName}${padPrice}`);
})
// Product      Price
// -------------------
// Apples        1.50
// Bananas       0.75
// Oranges       2.00

// Tip 29: Use the insertAdjacentHTML() method of DOM to Insert a String into the DOM
// Tip 30: Use the createTreeWalker() DOM Method to Traverse the DOM