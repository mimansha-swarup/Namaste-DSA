/* 
Problem Statement:
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Examples:
Example 1:
Input: nums = [2, 2, 1]

Output: 1

Example 2:
Input: nums = [4, 1, 2, 1, 2]

Output: 4

Example 3:
Input: nums = [1]

Output: 1
 */

const singleNumber = (nums) => {
    let result = 0
    for(let i = 0; i<nums.length; i++){
        result = result ^ nums[i]
    }

    return result
    
}

console.log(singleNumber([2, 2, 1]))

/* 
1. XOR works bit by bit

For each individual bit:

0 ^ 0 = 0   ← same
1 ^ 1 = 0   ← same
0 ^ 1 = 1   ← different
1 ^ 0 = 1   ← different

So your statement is correct:

Same bits → 0, different bits → 1.

2. When you XOR decimal numbers, they are compared in binary

For example:

4 ^ 1

JavaScript looks at their binary representations:

4 = 100
1 = 001

Then compares each corresponding bit:

  100
^ 001
-----
  101

Which is decimal 5.

*/