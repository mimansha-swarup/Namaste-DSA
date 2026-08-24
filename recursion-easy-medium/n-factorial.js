/* 
Problem Statement:
Write a recursive function fact(n) that returns the factorial of a number n.

Example:
Input: 5

Process: (5 * 4 * 3 * 2 * 1)

Output: 120
 */

const nFact = (n) =>{
    if  (n===0) return 1
    return n* nFact(n-1)
}


console.log(nFact(5))