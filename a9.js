function solve(n, arr) {
     
    let stack = [];
    let ans = [];

    for (let i = 0; i < n; i++){

        while (stack.length > 0 && stack[stack.length - 1] >= arr[i])
        {
             stack.pop()
        }

        if (stack.length > 0)
        { ans.push(stack[stack.length - 1]) }

        else { ans.push(-1) }
        
        stack.push(arr[i]);
            
    }
    console.log(ans.join(" "))
 }





function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
   // console.log(n, arr)
    
    solve(n,arr)
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`8
39 27 11 4 24 32 32 1`);
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
      process.exit(0) ;
    });
  }
