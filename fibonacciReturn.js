
function fibonacci(n) {
    let ans = new Array(n + 1).fill(0);
    ans[0] = 0;
    ans[1] = 1;
    for (let i = 2 ; i <= n; i++){
        ans[i] = ans[i-1]+ans[i-2];
    }
    console.log(ans[n])
}
function runProgram(input) {
    // write code here
    let n = +input;
   // console.log(n)
    fibonacci(n);
}

if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`5`);
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
