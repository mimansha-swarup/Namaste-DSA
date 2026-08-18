/*
Problem Statement:
Write a function that returns the number of negative numbers in an array.

nput: arr = [2, -6, 4, 8, 1, -9]

Output: 2
*/ 
const arr = [2, -6, 4, 8, 1, -9]
let count = 0
for(let i =0; i<arr.length; i++) {
    if(arr[i]<0){
        count++
    }
}
console.log(count)


/*

Problem Statement:
Write a function that returns the smallest number in an array.


Example:
Input: arr = [2, -6, 4, 8, 1, -9]

Output: -9
*/ 

const arr2 = [2, -6, 4, 8, 1, -9]
let smallest = Infinity

for(let i = 0; i < arr2.length; i++) {
    if(arr2[i] < smallest) {
        smallest = arr2[i]
    }
}

console.log(smallest)


/*

Problem Statement:
Write a function that returns the largest number in an array.

Example:
Input: arr = [2, -6, 4, 8, 1, -9]

Output:8
*/ 


const arr3 = [2, -6, 4, 8, 1, -9]
let largest = -Infinity

for(let i = 0; i < arr3.length; i++) {
    if(arr3[i] > largest) {
        largest = arr3[i]
    }
}

console.log(largest)
