/* 
Selection Sort
Selection Sort is a simple comparison-based sorting algorithm.
It divides the array into two parts: a sorted subarray and an unsorted subarray.
Initially, the sorted part is empty, and the unsorted part is the entire array.
In each iteration, it finds the minimum element from the unsorted part and moves it to the end of the sorted part.
Example 1:
Input: [4, 5, 1, 3, 9]

Output: [1, 3, 4, 5, 9]


 */

//  smallest pick kr ke left side main lgate jaante and sbse smallest phle lgate toh left main sorted array rhega 

const selectionSort = (nums) =>{
    let n = nums.length
    for(let i=0; i< n -1; i++){
       let smallest = i
       for(let j= i+1; j<n; j++){
        if(nums[j]<nums[smallest]){
            smallest = j
        }
       }
       if(smallest!=i){
        let temp = nums[smallest]
        nums[smallest] = nums[i]
        nums[i] = temp
       }
    }
    return nums

}

console.log(selectionSort([4, 5, 1, 3, 9]))