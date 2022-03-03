function stepsCount(n,dp) {
    if (dp[n] !== -1) 
    { return dp[n] }
    
    else {
       dp[n] = stepsCount(n - 1,dp) + stepsCount(n - 2,dp) + stepsCount(n - 3,dp)
    }
    return dp[n]
}

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    // console.log(n); 
    let dp = new Array(n+1).fill(-1)
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2 ;
    dp[3] = 4;
    stepsCount(n,dp);
    console.log(dp[n])
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
