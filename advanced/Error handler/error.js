// 1 常见错误类型 
throw new Error // VM1291:1 Uncaught Error


something  // Uncaught ReferenceError: some is not defined

(. // VM1312:1 Uncaught SyntaxError: Unexpected token '.')



// 2 错误有三个值 
try {
    throw new Error('This is an error message!');
} catch (err) {
    console.log('Name:', err.name);
    console.log('Message:', err.message);
    console.log('Stack:', err.stack);
}
// Name: Error
// VM1752:5 Message: This is an error message!
// VM1752:6 Stack: Error: This is an error message!
//     at <anonymous>:2:11