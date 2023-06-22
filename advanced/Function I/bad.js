// 三个异常场景 导致无法 正常垃圾回收或者导致内存泄漏
// 1) var  导致产生了很多全局变量 无法及时清除 
var a = 1 
var b = 2
var c = 3




// 2) 事件监听 没有remove 
// 获取要添加事件监听器的元素
var element = document.getElementById("myElement");

// 定义要执行的函数
function myFunction() {
  console.log("The element was clicked!");
}

// 添加点击事件监听器
element.addEventListener("click", myFunction);

// 移除点击事件监听器
element.removeEventListener("click", myFunction);






// 3) setInterval 没有清除定时器
// 定义要重复执行的函数
function myFunction() {
    console.log("Hello, World!");
  }
  
  // 每隔 1000 毫秒（1 秒）执行一次 myFunction
  var intervalId = setInterval(myFunction, 1000);
// 清除定时器
clearInterval(intervalId);
  
