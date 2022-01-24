
function findMax(n, arr) {
  let lo = 0;
  let hi = n - 1;
  let max = -1 / 0;

  while (lo <= hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);

    if (arr[mid] < arr[lo]) { hi = mid - 1; }

    else {
      lo = mid + 1;
      if (arr[mid] > max) { max = arr[mid]; }
    }

  }
  return max;
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
  //  console.log(n, arr)
    console.log(findMax(n,arr))
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`5
6 7 8 1 4`);
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
