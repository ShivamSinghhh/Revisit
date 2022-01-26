
function findOddSub(n, arr,curr, ans) {
    if (curr === n) { return }
    else if (ans.length > 0) { return ans }
    
    for (let i = 0; i < arr.length; i++){
        
    }
    
}


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;

    for (let i = 0; i < test; i++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(n, arr);
       // findOddSub(n,arr,[])
    }
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`2
4
4 3 2 1
2
2 4`);
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
