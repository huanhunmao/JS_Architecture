// 反转 这种 字符串 
// 输入 I           am    good
// 输出 good am I 

// Wrong code 
function reverseString0(str){
    return str.split(' ').reverse().join(' ')
}

const res0 = reverseString0('I           am    good') 
console.log('res0', res0);  // res0 good    am           I


// // Good code 
// function reverseString(str){
//         // 表示匹配一个或多个连续的空格字符 因为正则表达式指定了空格字符作为分隔符，所以该字符串中的连续空格会被视为一个分隔符
//     const words = str.split(/\s+/)
//     console.log('words', words); // words [ 'I', 'am', 'good' ]

//     // 反转
//     const reverseWords = words.reverse()

//     // 空格连接 
//     const result = reverseWords.join(' ')
//     return result
// }

// // 
// const res = reverseString('I           am    good') 
// console.log('res', res); // res good am I