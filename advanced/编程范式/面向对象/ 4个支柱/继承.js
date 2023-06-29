class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        // 子类实现 
    }
}

class Dog extends Animal {
    // constructor(name){ // 可省略 不写也可以 
    //     super(name)
    // }
    speak(){
        console.log('Wang wang wang !');
    }
}

class Cat extends Animal {
    // constructor(name){
    //     super(name)
    // }
    speak(){
        console.log('Miao miao miao !');
    }
}

const dog = new Dog('xiugou');
console.log(dog.name); // xiugou
dog.speak(); // Wang wang wang !

const cat = new Cat('luelue')
console.log(cat.name); // luelue
cat.speak(); // Miao miao miao !
