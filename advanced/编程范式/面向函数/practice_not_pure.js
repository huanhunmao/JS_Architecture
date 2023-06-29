// Amazing shopping 
const user = {
    name:'ppx',
    active: true,
    cart: [], // 购物车
    purchases:[] // 购买的东西
}

// features
// 1. Add items to cart
function addItemsToCart(user, item){
    user.cart.push(item)
}
// 2. Add 3% tax to item in cart
function addTaxToItem(user){
    user.cart.forEach(item => item.price = item.price * 1.03)
}
// 3. Buy items: cart --> purchases
function buyItems(user){
    user.purchases  = user.cart 
    user.cart = []
}
// 4.Empty to cart 
function emptyCart(){
    user.cart = []
}

// 示例使用：
const item1 = { name: 'Item 1', price: 10 };
const item2 = { name: 'Item 2', price: 20 };

addItemsToCart(user, item1);
addItemsToCart(user, item2);

console.log(user.cart); // [ { name: 'Item 1', price: 10 }, { name: 'Item 2', price: 20 } ]
addTaxToItem(user) // 带上税
console.log(user.cart); // [ { name: 'Item 1', price: 10.3 }, { name: 'Item 2', price: 20.6 } ]

buyItems(user)
console.log(user.purchases);  // [ { name: 'Item 1', price: 10.3 }, { name: 'Item 2', price: 20.6 } ]
console.log(user.cart); // []