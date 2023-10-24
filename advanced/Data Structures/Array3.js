class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};

        return new Proxy(this, {
            get: function(target, prop, receiver) {
                if (typeof prop === 'string' && !isNaN(prop)) {
                    return target.data[prop];
                } else {
                    return Reflect.get(target, prop, receiver);
                }
            },
            set: function(target, prop, value) {
                if (typeof prop === 'string' && !isNaN(prop)) {
                    target.data[prop] = value;
                    if (parseInt(prop) >= target.length) {
                        target.length = parseInt(prop) + 1;
                    }
                    return true;
                } else {
                    return Reflect.set(target, prop, value);
                }
            }
        });
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        this.shiftItems(index);
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const myArray = new MyArray();
console.log(myArray[0]); // undefined
myArray.push('hello');
myArray.push('hi');
myArray.push('wawawa');
console.log(myArray[1]); // "hi"
myArray[1] = 'changed';
console.log(myArray[2]); // "wawawa"

