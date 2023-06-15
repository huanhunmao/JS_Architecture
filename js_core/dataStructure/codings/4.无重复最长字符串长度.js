//  无重复最长字符串长度
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let start = 0 
    let charMap = new Map(); // 字符和索引位置的字典

    for(let i = 0; i < s.length; i ++){
        const char = s[i]

        //满足这个if 说明重复了 往下走重新记 
        // 检查是否有重复字符并更新起始位置 
        if(charMap.has(char) && charMap.get(char) >= start){
            // console.log('charMap.get(char)',charMap.get(char));
            // 当前字符 char 在当前子串中有重复出现，需要更新起始位置 start 为重复字符的下一个位置
            start = charMap.get(char) + 1
        }

        charMap.set(char, i) // 更新字符的索引位置
        // console.log('charMap',charMap);
        console.log('start',start);
        maxLength = Math.max(maxLength,i - start + 1) // 更新最长子串的长度
    }

    return maxLength
};

let s = "abcabcbb";
let length = lengthOfLongestSubstring(s);
console.log(length);  // 输出: 3