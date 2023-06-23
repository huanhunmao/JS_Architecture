const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;
 
function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
}
 
change(number, string, obj1, obj2);
 
//Guess the outputs here before you run the code: 
console.log(number); // 100
console.log(string); // 'Jay'
// obj1 是一个对象，按引用传递给 change 函数。在函数内部，虽然将 obj2 赋值给了 obj1，
// 但这只是在函数作用域内创建了一个新的指针指向 obj2，并不会影响外部的 obj1 对象
console.log(obj1.value); // 'a'