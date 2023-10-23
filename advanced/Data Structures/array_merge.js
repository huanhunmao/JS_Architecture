//  mergeArray 方法    实现合并两个数组并排序成新数组 

// 1  使用 concat 和 sort
function mergeArray(arr1, arr2) {
    const mergeArray = arr1.concat(arr2);
    const sortArray = mergeArray.sort((a,b) => a - b)

    console.log(sortArray);
}

// mergeArray([1,5,9],[3,12,4])


// 2 使用 spread 操作符 和 sort
function mergeArray2(arr1, arr2) {
    console.log([...arr1,...arr2].sort((a,b) => a - b)); 
}

// mergeArray2([1,5,9],[3,12,4])

// 3 手动合并后排序 + 冒泡排序  时间复杂度 O(N^2)
function mergeArray3(arr1, arr2){
    let merged = []
    for(let i = 0; i < arr1.length; i++){
        merged.push(arr1[i])
    }

    for(let i = 0; i < arr2.length; i++){
        merged.push(arr2[i])
    }

    // 冒泡排序
    for(let i = 0; i < merged.length; i++){
        for(let j = 0; j < merged.length - i; j ++){
            if(merged[j] > merged[j+1]){
                let temp = merged[j]
                merged[j] = merged[j+1]
                merged[j+1] = temp
            }
        }
    }

    // return merged
    console.log(merged);
}

mergeArray3([1,5,9],[3,12,4])