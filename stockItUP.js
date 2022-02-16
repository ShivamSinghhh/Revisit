
function calculateExpenses(weeks, arr) {
    let rate = [110, 120, 42, 53, 40, 32, 126];
    let reqWt = [5, 2, 2, 3, 2, 5, 2];
    
    let total = 0;
    arr.forEach((el,i) => {
        if (el === 1)
       {
            total += el*rate[i]*reqWt[i]
        }
        
    });

    console.log(weeks * total);
}




function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let weeks = +input[0];
    let arr = input[1].trim().split(" ").map(Number);

    calculateExpenses(weeks,arr);
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`4
0 1 1 1 0 0 1`);
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
