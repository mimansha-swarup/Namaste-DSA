/*

Pattern 1: Print nxn Star Square
Print a square pattern of stars (*) of size n x n.

Output
* * * *
* * * *
* * * *
* * * *

*/ 

function squareStars(n) {
    for(let i = 0; i < n; i++) {
        let r = ""
        for(let j = 0; j < n; j++) {
            r += "* "
        }
        console.log(r)
    }
}

squareStars(4)

    console.log("\n") // just for additional spacing



/*
Pattern 2: Right-Angled Star Triangle
Print a right-angled triangle of stars with n rows.

Output
*
* *
* * *
* * * *
*/

function rightTriangleStar(n) {
    for(let i = 0; i < n; i++) {
        let r = ""
        for(let j = 0; j < i + 1; j++) {
            r += "* "
        }
        console.log(r)
    }
}

rightTriangleStar(4)
 console.log("\n") // just for additional spacing


/*
Pattern 3: Print a Right-Angled Number Triangle
Write a program that prints a right-angled triangle of numbers of heightn.

Output
1
1 2
1 2 3
1 2 3 4
*/

function rightTriangleNumber(n) {
    for(let i = 0; i < n; i++) {
        let r = ""
        for(let j = 0; j < i + 1; j++) {
            r += (j + 1) + " "
        }
        console.log(r)
    }
}

rightTriangleNumber(4)
 console.log("\n") // just for additional spacing


/*
Pattern 4: Print a Right-Angled Triangle of Repeated Numbers
Write a program that prints a right-angled triangle where each row contains the same number repeated.

Output
1
2 2
3 3 3
4 4 4 4
*/

function rightTriangleSameNumber(n) {
    for(let i = 0; i < n; i++) {
        let r = ""
        for(let j = 0; j < i + 1; j++) {
            r += (i + 1) + " "
        }
        console.log(r)
    }
}

rightTriangleSameNumber(4)
 console.log("\n") // just for additional spacing


/*
Pattern 5: Print a Reverse Right-Angled Triangle of Increasing Numbers
Write a program that prints a reverse right-angled triangle where each row starts from 1 and the number of elements decreases with each row.

Output
1 2 3 4
1 2 3
1 2
1
*/

function reverseRightTriangleNumber(n) {
    for(let i = n; i > 0; i--) {
        let r = ""
        for(let j = 0; j < i; j++) {
            r += (j + 1) + " "
        }
        console.log(r)
    }
}

reverseRightTriangleNumber(4)
 console.log("\n") // just for additional spacing


/*
Pattern 6: Print a Right-Aligned Right-Angled Triangle of Stars
Write a program that prints a right-aligned triangle of stars increasing row by row, with leading spaces for alignment.

Output
      *
    * *
  * * *
* * * *
*/

function rightAlignedRightTriangleStar(n) {
    for(let i = 0; i < n; i++) {
        let r = ""
        for(let j = 0; j < n - i - 1; j++) {
            r += "  "
        }
        for(let k = 0; k < i + 1; k++) {
            r += "* "
        }
        console.log(r)
    }
}

rightAlignedRightTriangleStar(4)
 console.log("\n") // just for additional spacing


/*
Pattern 7: Print a Right-Angled Triangle of Alternating 1s and 0s
Write a program that prints a triangle of alternating 1s and 0s starting with 1 on each row.

Output
1
1 0
1 0 1
1 0 1 0
*/

function rightTriangleAlternating1s0s(n) {
    for(let i = 0; i < n; i++) {
        let r = ""
        let toggle =1
        for(let j = 0; j < i +1 ; j++) {
            r += toggle +" "
            toggle =  toggle ? 0:1
        }
      
        console.log(r)
    }
}

rightTriangleAlternating1s0s(4)
 console.log("\n") // just for additional spacing


/*
Pattern 8: Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)
Write a program to print a triangle of alternating 1s and 0s, but the toggle continues globally across rows.

Output
1
0 1
0 1 0
1 0 1 0
*/

function rightTriangleAlternating1s0sGlobalToggle(n) {
    let toggle = 1
    for(let i = 0; i < n; i++) {
        let r = ""
       
        for(let j = 0; j < i +1 ; j++) {
            r += toggle +" "
            toggle =  toggle ? 0:1
        }
      
        console.log(r)
    }
}

rightTriangleAlternating1s0sGlobalToggle(4)