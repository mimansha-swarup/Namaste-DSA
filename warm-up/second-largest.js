/*
Problem Statement:
Write a function secondLargest(arr) that returns the second largest distinct number in an array.

Requirements:
The array must contain at least two elements.
If all elements are equal, return: No second largest found.
If the array has fewer than two elements, return: Array should have at least two numbers.
Examples:
Input: arr = [0, 3, 5, 2, 7, 9] → Output: 7

Input: arr = [4, 4, 4, 4] → Output: No second largest found

Input: arr = [5] → Output: Array should have at least two numbers

Input: arr = [10, 20] → Output: 10
*/ 

const arr = [0, 3, 5, 2, 7, 9]
let largest = -Infinity
let secondLargest = -Infinity

for(let i = 0; i < arr.length; i++) {
 if(largest < arr[i]) {
    secondLargest = largest
    largest = arr[i]
 } else if(secondLargest < arr[i] && arr[i] !== largest) {
    secondLargest = arr[i]
 }
}

if(arr.length < 2){
    console.log("Array should have at least two numbers")
}else if(secondLargest === -Infinity) {
    console.log("No second largest found")
} else {
    console.log(secondLargest)
}