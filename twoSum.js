
function solve(n, arr, k) {
    let lo = 0;
    let hi = n - 1;

    while (lo < hi) {
        
        if (arr[lo] + arr[hi] === k) { console.log(lo, +" " + hi); return}
       
        else if (arr[lo] + arr[hi] < k) { lo++ }
        
        else { hi-- } 
   
    }

    console.log(-1 +" "+ -1)
}


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;

    for (let i = 0; i < test; i++){
        let [n, k] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(n, arr, k)
        solve(n,arr,k)
    }
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`);
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
