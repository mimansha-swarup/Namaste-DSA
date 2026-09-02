function Node (val){
    this.val = val
    this.next = null
}

var MyLinkedList = function() {
    this.head = null
    this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const curr = new Node(val)
    if(this.head === null){
      this.head = curr
    }else{
    curr.next = this.head
    this.head = curr

    }
    this.size+=1

    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let curr = this.head
    while(curr.next){
        curr = curr.next 
    }

    const newVal =  new Node(val)
    curr.next = newVal
    this.size+=1
    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    
    if(index === 0 ){
        this.addAtHead(val)
        return;
    }
    else if(index === this.size){
        this.addAtTail(val)
        return;
    }else if(index>=this.size){
        return
    }
    else{
        let i = 0

    let curr = this.head
    while(i<index-1){
        curr = curr.next
        i++;
    }
    const newVal =  new Node(val)
   
        newVal.next = curr.next
        curr.next = newVal 
    
    this.size+=1
    }

    
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */