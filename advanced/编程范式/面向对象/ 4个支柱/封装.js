class Car{
    constructor(){
        this.speed = 0; // 私有变量，只能在类内部访问
    }

    getSpeed(){
        return this.speed;
    }

    setSpeed(speed){
        if(speed < 0 ){
            this.speed = 0
        }else if(speed > 120){
            this.speed = 120
        }else{
            this.speed = speed
        }
    }
}

//
const qin = new Car()
qin.setSpeed(100)
console.log(qin.getSpeed()); // 100

qin.setSpeed(200)
console.log(qin.getSpeed());  // 120

qin.setSpeed(-10)
console.log(qin.getSpeed()) // 0