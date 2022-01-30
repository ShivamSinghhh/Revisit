
function recordBreaker(n, arr) {
    let min = arr[0];
    let max = arr[0];
    let minCount = 0;
    let maxCount = 0;

    for (let i = 1; i < n; i++){
        if (arr[i] < min)
        {
            min = arr[i];
            minCount++;
        }
        else if (arr[i] > max)
        {
            max = arr[i];
            maxCount++;
        }

    }

    console.log(maxCount,minCount)

    
}



function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for (let i = 0; i < test; i++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        recordBreaker(n,arr)
    }
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`2
9
10 5 20 20 4 5 2 25 1
10
3 4 21 36 10 28 35 5 24 42`);
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
