const user = {
    name: 'John',
    active: true,
    cart: [],
    purchases: []
}

// 添加历史记录 
let purchaseHistory = []
const pipe = (f, g) => (...args) => f(g(...args));

function purchaseItem(...fns) {
    return fns.reduce(pipe);
}

function addItemToCart(user, item) {
    purchaseHistory.push(user)
    const updateCart = user.cart.concat(item);
    return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToCart(user) {
    purchaseHistory.push(user)
    const { cart } = user;
    const taxRate = 1.3;
    const updateCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate,
        }
    });
    return Object.assign({}, user, { cart: updateCart });
}

function buyItem(user) {
    purchaseHistory.push(user)
    return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
    purchaseHistory.push(user)
    return Object.assign({}, user, { cart: [] });
}

const purchase = purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToCart,
    addItemToCart,
);

const res = purchase(user, { name: 'laptop', price: 200 });
console.log('res',res);

console.log('purchaseHistory',purchaseHistory);