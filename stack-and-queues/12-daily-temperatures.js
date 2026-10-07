/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const arr = Array(temperatures.length).fill(0)
     let s =[]
     for(i = temperatures.length - 1; i>=0; i--){
      
        while(temperatures[i]>= temperatures[s[s.length-1]] && s.length > 0){
            s.pop()
        }
        if(s.length === 0){
           arr[i] = 0
        }
        else{
            arr[i] = s[s.length-1] -i

        }


        s.push(i)

     }
     
    return arr
    
};