

const mergeHelper = (left, right) =>{
    const sortedArr = []
    let i =0;
    let j =0;
    while(i < left.length && j< right.length){
        if(left[i] < right[j]){
            sortedArr.push(left[i])
            i++
        }
        else{
            sortedArr.push(right[j])
            j++
        }
    }
    while(i<left.length){
        sortedArr.push(left[i])
        i++
    }
    while(j<right.length){
        sortedArr.push(right[j])
        j++
    }

    return sortedArr

}

const mergeSort = (arr) =>{
    if(arr.length ===1)
        return arr
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    return mergeHelper(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([6, 8, 0, 3, 1 , 2 , 4 , 5 ,0,8,3,4,9,23,12]))