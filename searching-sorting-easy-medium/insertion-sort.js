


const insertionSort = (nums)=>{
    for(let i = 1 ; i < nums.length ; i++ ){
        let curr = nums[i] // [4, 5, (1), 3, 9]
        let p =i-1 // p = 1 
        while (nums[p]> curr && p>=0){ // 5>1 && 1>=0
            // key has 1 
            nums[p+1] = nums[p]
            // now nums = [4,5,5,3,9] 
            p-- // now p = 0, loops again 
        }
        // adding curr in right position
        nums[p+1] = curr
    }
    return nums
}

console.log(insertionSort([4, 5, 1, 3, 9]))