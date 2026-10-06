
// My solution - 2 stack approach


var MinStack = function() {
    this.s =[]
    this.min =[]
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    if(!this.min.length){
        this.min.push(value)
    }else{
        const last = this.min.pop()
        this.min.push(last)
        if(last >= value)
        this.min.push(value)

    }
    this.s.push(value)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const last = this.s.pop()
    const min = this.getMin()
    if(last === min){
        this.min.pop()
    }
    return last
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
      const last = this.s.pop()
        this.s.push(last)
        return last
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
      const last = this.min.pop()
        this.min.push(last)
        return last
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


// optimized Solution


var MinStack = function() {
    this.s =[]
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    if(!this.s.length){
        this.s.push([value, value])
    }else{
       const min = Math.min(value, this.s[this.s.length -1][1])
        this.s.push([value, min])

    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
    return this.s.pop()[0]
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
       
        return this.s[this.s.length -1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
      
        return this.s[this.s.length -1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */