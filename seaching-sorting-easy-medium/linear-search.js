/* 
Linear Search
Linear Search is a simple search algorithm used to find a specific element in an array. It checks each element of the array one by one until the target value is found or the end of the array is reached.

Example 1:
Input: arr = [2, 4, 7, 10], target = 10

Output: 3

Explanation: 10 is found at index 3

Example 2:
Input: arr = [6, 8, 0, 3], target = 5

Output: -1

Explanation: 5 is not present in the array
 */


const linearSearch = (arr, target) =>{
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

console.log(linearSearch([2, 4, 7, 10], 10))
console.log(linearSearch([6, 8, 0, 3], 5))