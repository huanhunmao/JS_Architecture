const handler = {
    get:(target, prop) => {
        console.log(`Accessing property: ${prop}`); // Accessing property: name
        return target[prop];
    }
}

const targetObj = {name:'John', age:30}
const proxyObj = new Proxy(targetObj, handler)

console.log(proxyObj.name) // John