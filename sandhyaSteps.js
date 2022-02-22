
function countSteps(n,ans){
    
    if (n < 0) { return 0 }
    if (n === 0 )  { return 1 }
    
    if (ans[n] === undefined) {
       ans[n] = countSteps(n-1,ans) + countSteps(n-2,ans) + countSteps(n-3,ans)
    }
    return ans[n];
}

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input;
    // console.log(n)
    let ans = [0,1,2]
    countSteps(n,ans);
    console.log(ans[n])
    
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
