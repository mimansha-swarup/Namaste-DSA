/*
Problem Statement:
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.


Consider the number of unique elements of nums to be k. To get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important, as well as the size of nums. eturn k.

Examples:
Example 1:
Input: nums = [1,1,2]

Output: 2, nums = [1,2,_]

*/ 

const removeDuplicate = (nums) =>{
    let i = 0;
    let j =0;
    for(j=1;j<nums.length;j++){
        if(nums[j]!==nums[i]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1
    

}
console.log(removeDuplicate([1,1,2]))