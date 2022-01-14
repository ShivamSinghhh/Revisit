
function solve(n, arr, k) {
    let lo = 0;
    let hi = n - 1;
    let res = -1;

    while (lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2);

        if (arr[mid] === k) 
        {
            res = mid + 1;
            lo = mid + 1;
        }

        else if (arr[mid] < k)
        {
            lo = mid + 1;
            res = mid + 1;
        }
        else { hi = mid-1}
    }

    console.log(res)
}


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    
   // console.log(n,arr,k)
    solve(n,arr,k)
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`10 4
0 2 4 4 5 5 7 7 9 10`);
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
