/*
EXPLANATION:

Find the product of a number n times 5

Iteration:
(result for n) = n * 5

Recursion:
(result for n) = (result for n-1) + 5

EXAMPLE:
n = 3

(result of 3) = (result of 2) + 5
    = 10 + 5
    = 15

(result of 2) = (result of 1) + 5
    = 5 + 5
    = 10

(result of 1) = (result of 0) + 5
    = 0 + 5
    = 5

(result of 0) = 0

*/

// Code for the above example
function multiplyByFive(n) {

    if (n == 0) {
        return 0;
    }

    return multiplyByFive(n - 1) + 5;
}

/*
How the code runs:

multiplyByFive(3)
n = 3

multiplyByFive(3) 
    = multiplyByFive(3-1) + 5
    = multiplyByFive(2) + 5
    = 10 + 5
    = 15

multiplyByFive(2)
    = multiplyByFive(2-1) + 5
    = multiplyByFive(1) + 5
    = 5 + 5
    = 10

multiplyByFive(1)
    = multiplyByFive(1-1) + 5
    = multiplyByFive(0) + 5
    = 0 + 5
    = 5

multiplyByFive(0)
    = 0

*/




/* EXAMPLE 2 */

// Add up the numbers between 0 and n
function addUpNumbers(n) {
    //base case
    if (n == 0) {
        return 0;
    }
    //recursive case
    return addUpNumbers(n - 1) + n;
}

/*
addUpNumbers(3)
n = 3

addUpNumbers(3)
    = return addUpNumbers(2) + 3
    = return 3 + 3
    = return 6

addUpNumbers(2)
    = return addUpNumbers(1) + 2
    = return 1 + 2
    = return 3

addUpNumbers(1)
    = return addUpNumbers(0) + 1
    = return 0 + 1
    = return 1

addUpNumbers(0)
    = return 0
*/



/* EXAMPLE 3 */

// Fibonacci sequence
// 1, 1, 2, 3, 5, 8, 13, 21, ...

function fibonacci(n) {

    if (n == 1) {
        return 1;
    }
    else if (n == 2) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

/*
fibonacci(5)
n = 5

fibonacci(5)
    = fibonacci(4) + fibonacci(3)
    = (fibonacci(2) + fibonacci(1) + fibonacci(2)) + (fibonacci(2) + fibonacci(1))
    = (1 + 1 + 1) + (1 + 1)
    = 5

fibonacci(4)
    = fibonacci(3) + fibonacci(2)
    = fibonacci(2) + fibonacci(1) + fibonacci(2)
    = 1 + fibonacci(1) + fibonacci(2)
    = 1 + 1 + fibonacci(2)
    = 1 + 1 + 1
    = 3

fibonacci(3)
    = fibonacci(2) + fibonacci(1)
    = 1 + fibonacci(1)
    = 1 + 1
    = 2

fibonacci(2)
    = 1

fibonacci(1)
    = 1

fibonacci(2)
    = 1

*/