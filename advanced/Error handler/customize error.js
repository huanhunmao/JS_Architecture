// 自定义  Error / extends Error 为了避免过度泄露更多的错误信息
class AuthenticationError extends Error {
    constructor(message){
        super(message);
        this.name = "AuthenticationError";
        this.favoriteStack = "grapes"
    }
}

const a =  new AuthenticationError('ooooops!')
console.log(a.message); // ooooops!
console.log(a.favoriteStack); // grapes
console.log(a.name); // AuthenticationError

// 这样就可以定义多个种类的 Error 
class DatabaseError extends Error {
    constructor(message){
        super(message);
        this.name = "DatabaseError";
        this.favoriteStack = "grapes2"
    }
}

class PermissionError extends Error {
    constructor(message){
        super(message);
        this.name = "PermissionError";
        this.favoriteStack = "grapes3"
    }
}