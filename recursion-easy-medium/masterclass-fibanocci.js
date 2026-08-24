/* 

What is a Fibonacci Number?
The Fibonacci sequence is a famous mathematical series in which each number is the sum of two preceding ones It’s defined by the recurrence relation:

F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) for n > 1
This generates a series like:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

Each number is the sum of the two before it.
This sequence appears frequently in nature (e.g., flower petals, pine cones, and spiral shells), in algorithms (like dynamic programming), and even in computer science problems related to recursion, time complexity, and optimization.

 */

const fib = (n) =>{
if(n <=1) return n
return fib(n-1) + fib(n-2)
}

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(10))
