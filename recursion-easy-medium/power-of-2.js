/* 
Problem Statement:
Write a recursive function isPowerOfTwo(n) that returns true if n is a power of 2, otherwise false.

Example 1:
Input: 8

Process: (8 → 4 → 2 → 1)

Output: true

Example 2:
Input: 18

Output: false

 */


const isPowerOfTwo = (n) =>{
 if(n === 1 ) return true
 if((n<1 || n%2 !== 0) ) return false
 return isPowerOfTwo(n/2)
}
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(18))