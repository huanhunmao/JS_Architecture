// localStorage 本地缓存数据 
function setCache(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getCache(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null
}

// 
const data = { name: 'Mark', age:18 };
setCache('userData',data);
console.log(getCache('userData'))