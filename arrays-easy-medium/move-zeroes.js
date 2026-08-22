/* 
Problem Statement:
Given an integer array nums, move all 0’s to the end of it while maintaining the relative order of the non-zero elements.

Note:You must do this in-place without making a copy of the array.

Examples
Example 1:

Input:nums = [0,1,0,3,12]

Output:[1,3,12,0,0]

Example 2:

Input:nums = [0]

Output:[0]
*/

const moveZeroes = (nums) =>{
    let i = 0;
    let j = 0;

    while(i<nums.length){

        if(nums[i]!=0){
            nums[j] = nums[i] 
            j++
        }
        i++;
    }
    while(j< i){
        nums[j]=0
        j++
    }
        

    console.log(nums)
    
}

moveZeroes([0,1,0,3,12])
moveZeroes([1,0,3,0,12])
moveZeroes([0])