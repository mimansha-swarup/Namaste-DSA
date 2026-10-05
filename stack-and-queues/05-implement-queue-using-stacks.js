
var MyQueue = function() {
    this.s1 = []
    this.s2 = []
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    
    this.s1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.s2.length) {
        const el = this.s2.pop()  
            return el
    }
    let n = this.s1.length
    for(let i =0; i<n-1; i++){
        const el = this.s1.pop()
        this.s2.push(el)
    }
    return this.s1.pop()
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.s2.length) {
        const el = this.s2.pop()  
        this.s2.push(el)
        return el
    }
     let n = this.s1.length
     let lastNum ;
    for(let i =0; i<n; i++){
        const el = this.s1.pop()
        if(i === n-1) lastNum = el
        this.s2.push(el)
    }
    return lastNum
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length ===0 && this.s2.length === 0
    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */