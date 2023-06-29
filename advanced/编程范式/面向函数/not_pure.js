// 列举一些 非纯函数 
// 1) console.log
function a(){
    console.log('a')
}

a()

// 2) Math.random()
function b(val){
    console.log(Math.random() * val); 
} 

b(99)

// 3) new Date()
function currentDate(){
    console.log(new Date());
}

currentDate()

// 4) Result can depends on other variable(tax)

let tax = 20;
function calculateGST(productPrice) {
	return productPrice * (tax / 100) + productPrice;
}
console.log(calculateGST(15))
// itemPrice(20)

// 5) has http request
async function hasHttpRequest(){
    await testHttpRequest()
}

// 6) DOM operation 
function operateDom(){
    // const test = document.getElementById('test')
    // xxx
}