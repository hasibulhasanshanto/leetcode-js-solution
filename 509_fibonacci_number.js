/**
 * @param {number} n
 * @return {number}
 * Time complexity: O(n)
 * Space complexity:
 */
const fib = function(n) {
    let first = 0;
    let second = 1
    let curr = 0;

    if(n===0 || n===1) return n; 

    for (let i = 1; i < n; i++) {
        curr = first + second;
        first = second;
        second = curr;
        
    }

    return curr;
    
};

/**
 * Second method
 */

const fib2 = function(n) {
    // using memoization.
    const memo = {}
    
    const helper = (n)=>{
        if(n in memo) {
            return memo[n]
        }
        if(n===0 || n===1) return n; 
        return memo[n] = helper(n-1)+helper(n-2)
    }
    return helper(n)
};
