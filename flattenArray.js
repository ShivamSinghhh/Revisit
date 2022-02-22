let arr = [1, 2, [3, [4, [2], 5], 6]];


 //------Recursive approach---------------------//

let res = [];
let sum = 0;

function recFlatten(input) {

      input.forEach(el => {
        if (Array.isArray(el))
        { recFlatten(el) }
        else {
            res.push(el);
            sum += el;
        }
      });
    return res;
 }
   
//--------------------------------------------//

console.log(recFlatten(arr))
console.log(sum);
console.log(flatten(arr))

//-------stack formula------in reverse---------//

function flatten(input) {
    
    let stack = [input];
    let ans = [];

    while (stack.length) {
        let top = stack.pop();
        if (Array.isArray(top)) {
            stack.push(...top)
        }
        else { ans.push(top) }

    }
    return ans.reverse();

}
