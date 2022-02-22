
function canYouFindTheSum(n, arr) {
    let left = [];
    let right = [];
    for (let i = 0; i < n; i++) {
        let leftFlag = true;
        let rightFlag = true;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[i]) {
                left.push(j + 1);
                leftFlag = false;
                break;
            }
        }
        if (leftFlag) { left.push(-1) }

//------------right side------check----------------//
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[i]) {
                right.push(j + 1);
                rightFlag = false;
                break;
            }
        }
        if (rightFlag) {right.push(-1)}

    }

//-----------summation of left and right values--------------//

    let ans = [];
    for (let i = 0 ;i< n; i++){
        ans[i] = left[i]+right[i]
    }
   console.log(ans.join(" "))    
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
   // console.log(n, arr)
    canYouFindTheSum(n, arr)
}

if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`5
  5 4 1 3 2`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
