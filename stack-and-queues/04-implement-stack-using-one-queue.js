
var MyStack = function() {
    this. q1 = []
    
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
     let i =0
     while(i < n-1){
        const el = this.q1.shift()
        this.q1.push(el)
        i++;
     }
    
    const finalNum = this.q1.shift()

    return finalNum
    
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const n = this.q1.length
    let finalNum ;
    let i =0
     while(i < n){
        const el = this.q1.shift()
        if(i === n-1) finalNum = el

        this.q1.push(el)
        i++;
    }
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