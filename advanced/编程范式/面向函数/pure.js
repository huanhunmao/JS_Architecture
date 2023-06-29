// Amazing shopping 
const user = {
    name:'ppx',
    active: true,
    cart: [], // 购物车
    purchases:[] // 购买的东西
}

function addItemToCart(user, item){
    const updatedCart = [...user.cart, item]
    return {...user, cart:updatedCart}
}

function addTaxToCart(user){
    const { cart }  = user
    const tax = 0.03 
    const updatedCart = cart.map(item => {
        return {
            name:item.name,
            price: item.price + item.price * tax
        }
    })

    return {...user, cart: updatedCart}
}

function buyItems(user){
     return {...user, purchases: user.cart, cart: []}
}

function emptyCart(){
    return {...user, cart: []}
}

const newItem = { name: 'Item 1', price: 10 };
const addItems = addItemToCart(user, newItem)
console.log(addItems.cart); // [ { name: 'Item 1', price: 10 } ]

const addTaxItems = addTaxToCart(addItems)
console.log(addTaxItems.cart); // [ { name: 'Item 1', price: 10.3 } ]

const buyItem = buyItems(addTaxItems)
console.log(buyItem.purchases); //  [ { name: 'Item 1', price: 10.3 } ]