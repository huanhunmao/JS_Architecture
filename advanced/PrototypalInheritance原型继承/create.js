// 为了不直接操作 __proto__ 可以使用 Object.create()
let human = {
    language: true
}

let one  = Object.create(human)
console.log('one',one); // one {}
one.see = true
console.log('one',one); // one { see: true }
console.log('language', one.language); // language true