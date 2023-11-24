// Nesting and early returns  提前返回

// Bad code 
if(user && user.isAuthenticated){
     // ...20 lines of code

     if(timezone){
        // ...10 lines of code
     }

     if(isQualified){
        // ...50 lines of code
     }
}


// Good code
const userAuthenticated = user && user.isAuthenticated
if(!userAuthenticated){
    return
}

// ...20 lines of code
const timezone = ... 
if(!timezone){
    return 
}

// ...10 lines of code
const isQualified = ... 
if(!isQualified){
    return 
}
// ...50 lines of code



// Bad code 
function getDailyRewards(user){
    if(user.isAuthenticated){ // 不要将大段代码 写在 if 里面
        // ...50 lines of code
    }
}

// Good code 
function getDailyRewards(user){
    if(!user.isAuthenticated){
        return 
    }

      // ...50 lines of code
}
