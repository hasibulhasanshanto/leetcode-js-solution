/**
 * @param {string} s
 * @return {boolean}
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
const isValid = function(s) {
    const hashMap = { 
        "(": ")", 
        "{": "}", 
        "[": "]", 
    }

    const stack = [];

    for(let ch of s){
        if(hashMap[ch]){
            // ch is an opening bracket 
            stack.push(hashMap[ch]);
        } else if(stack.length > 0 && stack[stack.length -1] === ch){
            // removing the opening bracket from stack if match the close bracket 
            stack.pop();
        } else{
            return false;
        }
    }
    // finally if the stack is empty return true otherwise false
    return stack.length === 0; 
};

console.log(isValid("(){[]}"));
