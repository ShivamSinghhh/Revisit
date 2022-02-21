function findMinMaxDiff(n, m, arr) {
    let minSum = 0;
    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        if(i < m) { minSum += arr[i]}
        if( i >= n-m) { maxSum += arr[i]}
    }
    console.log(maxSum-minSum)
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for (let i = 0; i < test; i++) {
        let [n, m] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        arr.sort((a, b) => a - b);
        findMinMaxDiff(n, m, arr)
    }

}

if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`1
  5 1
  1 2 3 4 5`);
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
