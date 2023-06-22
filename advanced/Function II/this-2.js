//
var b = {
    name: 'ppx',
    say(){
        console.log('b',this);
    }
}
var c = {
    name: 'ppz',
    say(){
        return function(){ // 没有对象调用 return 后的这个函数 指向 window
            console.log('c',this);
        }
    }
}
var d = {
    name: 'dd',
    say(){
        return () => {
            console.log('d',this);
        }
    }
}

b.say()
c.say()() 
d.say()()