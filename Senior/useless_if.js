// Useless if/else blocks  没用的 if/else 部分

// Bad code 
function isEven(number){
    if(number % 2 === 0){
        return true
    }else {
        return false
    }
}

function isEven(number){
    if(number % 2 === 0){
        return true
    }

    return false
}
// Good code
function isEven(number){
    return number % 2 === 0 ? true : false
}

function isEven(number){
    return number % 2 == 0
}



// Bad code 
function getScheduleKey(){
    const hasSchedule = this.hasVisitScheduled()
    if(hasSchedule){
        return this.schedule.key 
    }else{
        return this.schedule.cancelSchedule.key
    }
}

// Good code
function getScheduleKey(){
    const hasSchedule = this.hasVisitScheduled()
    if(hasSchedule){
        return this.schedule.key 
    }
    return this.schedule.cancelSchedule.key
}
