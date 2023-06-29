class Shape{
    area(){
        // 抽象方法 子类需要实现
    }
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius
    }

    area(){
        return 3.14 * this.radius ** 2
    }
}

class Square extends Shape{
    constructor(side) {
        super()
        this.side = side
    }

    area(){
        return this.side * this.side
    }
}

// 
const circle = new Circle(5)
console.log(circle.area()); // 78.5

const square = new Square(4)
console.log(square.area()); // 16