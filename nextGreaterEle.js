
function nextGreaterEle(n,arr){
    let stack = [];
    let ans = [];

    for (let i = n-1 ; i >=0; i--){
        while (stack.length && stack[stack.length-1] <= arr[i])
        { stack.pop()}

        if (stack.length) {ans.push(stack[stack.length-1])}
        else {ans.push(-1)}

        stack.push(arr[i])

    }
    console.log(ans.reverse().join(" "))


}

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1 ;
    for(let i = 0 ; i < test;i++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
       // console.log(n,arr)
        nextGreaterEle(n,arr)
        
    }
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`1
  4
  1 3 2 4`);
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
