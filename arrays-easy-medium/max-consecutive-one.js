/* Problem Statement:
Given a binary array nums, return the maximum number of consecutive 1’s in the array.

Examples
Example 1:

Input:nums = [1,1,0,1,1,1]

Output:3 */


const maxConsecutiveOne = (nums) =>{
    let maxOne = 0;
    let count = 0
    for(let i = 0; i< nums.length; i++){
        if(nums[i]===1){
            count++
        }
        else{
            count=0
        }

        if(maxOne<count){
            maxOne = count
        }

    }
    return maxOne
    
}
console.log(maxConsecutiveOne([1,1,0,1,1,1]))
console.log(maxConsecutiveOne( [1,0,1,1,0,1]))
    
