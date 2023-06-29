class Animal{
    speak(){
        // 抽象方法 子类实现 
    }
}

class Dog extends Animal{
    speak() {
        return 'Wang!'
    }
}

class Cat extends Animal{
    speak() {
        return 'Miao!'
    }
}

function animalSpeak(animal){
    console.log(animal.speak());
}

//
const dog = new Dog();
const cat = new Cat();

animalSpeak(dog); // Wang!
animalSpeak(cat); // Miao!