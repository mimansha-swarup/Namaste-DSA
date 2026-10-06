// My solution

/**
 * @param {string[]} tokens
 * @return {number}
 */
 const operation1 = ["+", "-", "*", "/"]
var evalRPN1 = function(tokens) {
    const s =[]
    for (let i =0; i<tokens.length; i++){
        if(operation1.includes(tokens[i])){
            const a = s.pop()
            const b = s.pop()
            const val = eval(`${b} ${tokens[i]} ${a}`)
            s.push(Math.trunc(val))
        }else{
            s.push(tokens[i])
        }
    }
    return Number(s.pop())
    
};


// Optimal Solution:
/**
 * @param {string[]} tokens
 * @return {number}
 */
 const operation = {
    "+" :( b,a) => b+a,
    "-" :( b,a) => b-a,
    "*" :( b,a) => b*a,
    "/" :( b,a) => Math.trunc(b/a),

 }
var evalRPN = function(tokens) {
    const s =[]
    for (let i =0; i<tokens.length; i++){
        if(operation[tokens[i]]){
            const a = s.pop()
            const b = s.pop()
            const val = operation[tokens[i]](+b, +a) // typecasting to number
            s.push(val)
        }else{
            s.push(tokens[i])
        }
    }
    return Number(s.pop())
    
};