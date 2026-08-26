/* 
Bubble Sort
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
This process is repeated until the array is sorted.
After each pass, the largest unsorted element “bubbles up” to its correct position at the end of the array. It’s called “Bubble Sort”
As smaller elements slowly “bubble” to the top of the list. */


// Bada wala number after every first last main lgta rhega isliye ise bubble krna bolke bubble sort bole

const bubbleSort = (nums) =>{
    let n = nums.length
    for (let i =0; i<n -1; i++){
        let isSwapped =false
        for(let j = 0; j< n -i -1; j++){
            if(nums[j] >nums[j+1]){
                //swap flag to make sure agr sort  ho chuka swap nhi ho rha toh i lopp chlte na rhe
                isSwapped =true
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
        if(!isSwapped){
            break
        }
    }
    return nums
}

console.log(bubbleSort([2, 4, 7, 10, 6, 8, 0, 3]))

 