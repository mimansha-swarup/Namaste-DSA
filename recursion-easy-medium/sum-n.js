/* 
Problem Statement:
Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.

Example:
Input: 5

Process: 5 + 4 + 3 + 2 + 1 = 15

Output: 15
 */

const sumN = (n) =>{
    if(n==0) return 0
    
    return n+sumN(n-1)

    
}

console.log(sumN(5))