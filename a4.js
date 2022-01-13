
// let nums = [0, -1, 5, 8, -2]
//let nums = [2,7,11,15]
 let nums = [3,2,4,3]
let target = 6
console.log(solve(nums,target))

function solve(nums, target) {
   // console.log(nums)

    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        var data = {};
        data.val = nums[i];
        data.index = i;
        ans.push(data)
        console.log("data =",data)
    }   

    ans.sort((a, b) => a.val - b.val);
    console.log("ans =", ans)

    let lo = 0;
    let hi = ans.length - 1;


    while (lo < hi) {
        console.log("lo =", lo, "hi =", hi)

        let sum;
        sum = ans[lo].val + ans[hi].val;
        console.log("sum =", sum)

        if (sum == target)
        {
            let [x, y] = [ans[lo].index, ans[hi].index]

            if (x < y) { return [x,y]; }
            else { return [y,x]}

        }

        else if (sum < target) { lo++ }
        else { hi-- }

    }

    
   // console.log("ans =", ans)
    return -1;

};