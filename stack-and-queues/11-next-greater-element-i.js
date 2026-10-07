var nextGreaterElement = function(nums1, nums2) {
    const obj = {};
    const stack = [];

    // Traverse nums2 from right to left
    for (let i = nums2.length - 1; i >= 0; i--) {
        const current = nums2[i];
        
        // Pop elements from the stack that are smaller than or equal to the current element
        while (stack.length > 0 && stack[stack.length - 1] <= current) {
            stack.pop();
        }
        
        // If stack is empty, there is no greater element to the right. 
        // Otherwise, the top of the stack is the next greater element.
        obj[current] = stack.length > 0 ? stack[stack.length - 1] : -1;
        
        // Push the current element onto the stack for elements to the left to see
        stack.push(current);
    }
    
    // Map the results back to nums1
    return nums1.map(el => obj[el]);
};
