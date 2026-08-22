/* 
Problem Statement:
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Mergenums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Examples:
Example 1:
Input:

nums1 = [1,2,3,0,0,0], m = 3 nums2 = [2,5,6], n = 3

Output: [1,2,2,3,5,6]

*/

const merge = (nums1,m,nums2,n) =>{
    const nums1Copy = [...nums1]
    let i = 0;
    let j=  0;

    while (i<m && i< n){
        if(nums1Copy[i]< nums2[j]){
         nums1[i+j]= nums1Copy[i];
         i++
        }
        else if(nums1Copy[i]> nums2[j]){
            nums1[i+j]= nums2[j];
            j++
        }
        else if(nums1Copy[i]== nums2[j]){
            nums1[i+j]= nums1Copy[i];
            i++
            nums1[i+j]= nums2[j];
            j++
        }
    }
    if(i<m){
      
        while(i<m){
            nums1[i+j]= nums1Copy[i];
            i++
        }
    }
    if(j<n){
      
        while(j<n){
            nums1[i+j]= nums2[j];
            j++
        }
     }

    console.log(nums1)
}

merge([1,2,3,0,0,0],3,[2,5,6],3)
merge([1],1,[],0)
merge([0],0,[1],1)


/* 
merge reverse order approach
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
*/
const mergeReverse = (nums1,m,nums2,n) =>{
    let i = m-1;
    let j=  n-1; 
    let k =  m+n -1
    
    while(i>=0 && j>=0){
        if((nums1[i]>nums2[j])){
            nums1[k] = nums1[i]
            i--
            k--
        }
        else{
            nums1[k] = nums2[j]
            j--
            k--
        }
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    console.log(nums1)
    
}

mergeReverse([1,2,3,0,0,0],3,[2,5,6],3)
mergeReverse([4,5,6,0,0,0],3,[1,2,3],3)