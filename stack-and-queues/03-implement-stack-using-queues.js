
var MyStack = function() {
    this. q1 = []
    this. q2 = []
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
    
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    const n = this.q1.length
    for(let i =0; i <n-1; i++){
        const el = this.q1.shift()
        this.q2.push(el)
    }
    const finalNum = this.q1.shift()
    const temp = this.q1
    this.q1 = this.q2
    this.q2 = temp

    return finalNum
    
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const n = this.q1.length
    let finalNum ;
    for(let i =0; i <n; i++){
        const el = this.q1.shift()
        if(i === n-1) finalNum = el

        this.q2.push(el)
    }
    const temp = this.q1
    this.q1 = this.q2
    this.q2 = temp

    return finalNum
    
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0
    
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */