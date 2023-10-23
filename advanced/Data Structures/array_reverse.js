// reverse string 
// 实现一个 字符串 反转函数 reverseString   比如输入'We are using react !' 输出 '! tcaer gnisu era eW'


// 1 
function reverseString(str){
    const toArray = str.split('');
    const reverseArray = toArray.reverse()
    const toString = reverseArray.join('')
    console.log(toString);
}

// reverseString('We are using react !')


function reverseString2(str){
    let reversed = ''
    for(let i = str.length - 1; i >= 0; i --){
        reversed += str[i]
    }

    console.log(reversed);
}

reverseString2('We are using react !')