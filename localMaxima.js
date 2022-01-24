
function countMax(n, arr) {
    if (n < 3) { return -1; }
    else {
        let count = 0;
     
        for (let i = 1; i < n-1; i++){
            if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1])
                { count++}
        }
        return count;
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
       // console.log(n,arr)
        console.log(countMax(n, arr));
    }
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`2
2
1 2
10
884 729 768 201 266 494 597 328 705 287`);
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
