/* 
Problem Statement:
Write a function sum(n) that calculates the sum of all numbers in an array arr using recursion. It sums from index 0 to n.

Example:
Input: [5, 2, 6, 1, 3]

Process: 5 + 2 + 6 + 1 + 3 = 17

Output: 17
 */


const sumArr = (arr, n) =>{
    if (n === arr.length) return 0

    return arr[n] + sumArr(arr, n+1)
}

console.log(sumArr([5, 2, 6, 1, 3], 0))


/* Problem Statement:
Write a recursive function sum(n) that calculates the sum of all odd numbers in an array arr up to index n.

Example:
Input: [5, 2, 6, 1, 3]

Odd Numbers: 5, 1, 3

Output: 9
 */



const sumOddNumbers = (arr,n)=>{
    const isOdd = arr[n]%2 === 1
    if(n===0) return isOdd ? arr[n] : 0

    const numToAdd = isOdd ? arr[n] : 0
    return numToAdd + sumOddNumbers(arr,n-1)
}

console.log(sumOddNumbers([5, 2, 6, 1, 3], 4))