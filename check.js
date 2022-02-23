

 function numberOfWays(n,dp){
    if (n < 0) { return  0}
    if (dp[n] !== undefined)
       { return dp[n]}
    else {
        dp[n] = numberOfWays(n-1,dp) + numberOfWays(n-2,dp)+ numberOfWays(n-3,dp)
    }    
    return dp[n]
}

function runProgram(input) {
    // write code here
    let n = +input;
    let dp = new Array(n+1);
    dp[0] = 0 ;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4 ;     
    numberOfWays(n,dp)  
    console.log(dp[n]);  
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`4`);
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
