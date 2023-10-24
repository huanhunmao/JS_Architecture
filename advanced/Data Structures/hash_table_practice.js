// 
function findMostFrequentElement(arr){
    let freqMap = {}
    let maxCount = 0; // maxCount 记录目前为止遇到的最高的元素出现次数
    let mostFrequentElement //  用于存储出现次数最多的元素

    for(let elem of arr){
        if(freqMap[elem] === undefined){
            freqMap[elem] = 1
        }else{
            freqMap[elem] ++
        }

        if(freqMap[elem] > maxCount){
            maxCount = freqMap[elem]
            mostFrequentElement = elem
        }
    }

    return mostFrequentElement
}

// test
const arr = [1,1,2,5,5,5,4]
console.log(findMostFrequentElement(arr)); // 5