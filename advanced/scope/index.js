// scope 作用域 
// Root Scope (window)
var fun = 5;

function funFunction() {
    // child scope
    var fun = "hellooo";
    console.log(1, fun);
}

function funerFunction() {
    // child scope
    var fun = "Byee";
    console.log(2, fun);
}

function funestFunction() {
    // child scope
    fun = "AHHHHHH";
    console.log(3, fun);
}

console.log("window", fun); // window 5
funFunction();
funerFunction();
funestFunction();
console.log("finally", fun); // finally AHHHHHH