function frequency(n, arr, L, R, K) {
    let count = 0;
    while (L <= R) {
        if (arr[L - 1] === K)
        { count++; }
        L++;
    }
  console.log(count)
}


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [n, q] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let line = 2;
    for (let i = 0; i < q; i++){
        
        let [L, R, K] = input[line++].trim().split(" ").map(Number);
        frequency(n,arr,L,R,K)
    }
    
}
  
if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`6 2
1 5 3 2 3 2 
3 6 2
4 4 2
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
      process.exit(0) ;
    });
  }
