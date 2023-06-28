// call apply 实现 bind 
Function.prototype.myBind = function(obj){
    return () => this.call(obj)
}

const person = {
     name: 'John',
     greet: function(){
        console.log(`Hello ${this.name}`);
     }
}

const ppx = {
    name: 'ppx',
}

const boundGreet = person.greet.myBind(ppx)
boundGreet() // Hello ppx