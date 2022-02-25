
function smallestNeighborRight(n,arr){
    let stack = [];
    let ans = [];
    let count = 0 ;
    for (let i = n-1; i>=0 ; i--){

        while(stack.length > 0 && stack[stack.length-1] > arr[i])
        { stack.pop()}
        if(stack.length > 0) {ans.push(stack[stack.length-1])}
        else { ans.push(-1)}

        stack.push(arr[i])
    }

    
    for(let i = 0 ; i< ans.length ; i++){
        if (ans[i] === -1) { count++}
    }

    console.log(count);
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
   // console.log(n,arr)
    smallestNeighborRight(n,arr)
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`5
  4 2 1 3 7`);
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
