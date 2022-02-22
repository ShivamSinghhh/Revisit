
function squareSorting(n, arr) {

  for (let i = 0; i < n ; i++) {
    for (let j = 0; j < n-i; j++) {
         if ((arr[j])**2 > (arr[j+1])**2)
         { [arr[j],arr[j+1]] = [arr[j+1],arr[j]]}
    }
  }
  console.log(arr)

}


function runProgram(input) {
  // write code here
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;
  for (let i = 0; i < test; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    // console.log(n,arr)
    squareSorting(n, arr)
  }
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`1
  5
  -2 -3 1 4 -6
  `);
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
