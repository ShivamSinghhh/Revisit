
function findRoot(n, num) {
  
    let lo = 1;
    let hi = num;
    let ans;

    while (lo < hi && hi-lo >= 1) {
        let mid = lo + (hi - lo) / 2;
        if (mid ** n === num)
        {
            ans = mid;
            break;
        }
        else if (mid ** n > num) { hi = mid; }
        else {
            ans = mid;
            lo = mid ;
        }
    }
    
    console.log(Math.round(ans))
    
}


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1; 

    for (let i = 0; i < test; i++){

        let [n, num] = input[line++].trim().split(" ").map(Number);
        findRoot(n, num);
    }
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`3
2 9
6 4096
3 126`);
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
