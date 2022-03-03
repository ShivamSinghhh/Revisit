
function signalCapacity(n,arr){
    let ans = [];
    let stack = [];
    
    for(let i = 0 ; i < n; i++){      
        
        while(stack.length && stack[stack.length-1][0] <= arr[i])
        {
            stack.pop()
        }

        if (stack.length === 0) { ans.push(-1)}

        else { ans.push(stack[stack.length-1][1])}
      
        stack.push([arr[i],i])
    }
    
    for(let i = 0 ; i < n; i++){
        if ( ans[i] === -1 )
           { ans[i] = i+1}
        else { ans[i] = i - ans[i] }
    }

  console.log(ans.join(" "))

}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line =  1;
    for(let i = 0; i < test; i++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
      //  console.log(n,arr)
        signalCapacity(n,arr)
    }

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`2
  7
  100 80 60 70 60 75 85
  5
  3 5 0 9 8`);
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
