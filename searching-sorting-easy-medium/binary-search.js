/* 
Binary Search
Binary Search is an efficient algorithm used to find the position of a target value within a sorted array. Unlike linear search, it repeatedly divides the search interval in half, significantly reducing the number of comparisons.

Example 1:
Input: [1, 3, 5, 7, 9]

Output: 7
 */

 const binarySearch = (nums,target) =>{
    let i =0; 
    let j = nums.length -1

    while (i<=j){
        let mid = Math.floor((i+j)/2)
        if(nums[mid]===target){
            return mid
        }
        else if(nums[mid]<target){
            i = mid +1
        }
        else{
            j = mid -1
        }
    }
    return -1
 }

 console.log(binarySearch([1, 3, 5, 7, 9], 7))
 console.log(binarySearch([5], 5))
 