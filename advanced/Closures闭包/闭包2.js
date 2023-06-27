// 再来一个
const say = string => name1 => name2 =>console.log(`${string}  ${name1}  ${name2}`);

const sayHello = say('Hello')
// take a long time
console.log(sayHello('ppx')('hahaha')); // Hello  ppx  hahaha
