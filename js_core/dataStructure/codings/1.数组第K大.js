// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。


const findKthLargest  = function(nums, k){
    return quickSelect(nums, 0, nums.length - 1, k)
}

function quickSelect(nums, left, right, k){
    const partitionIndex = partition(nums, left, right)
    if(partitionIndex === nums.length - k){
        return nums[partitionIndex]
    }else if(partitionIndex < nums.length - k){
        return quickSelect(nums, partitionIndex + 1, right, k)
    }else{
        return quickSelect(nums, left, partitionIndex - 1,k)
    }
}

function partition(nums, left, right){
    const pivot = nums[right]
    let i = left

    for(let j = left; j < right; j++){
        if(nums[j] < pivot){
            swap(nums, i, j)
            i++
        }
    }

    swap(nums,i, right)

    return i 
}

function swap(nums, i,j){
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

const res = findKthLargest([3, 2, 1, 5, 6, 4],2)
console.log(res); // 5
