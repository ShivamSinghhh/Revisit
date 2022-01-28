function checkBoarding(n, checkBags, handBags) {
    
    for (let i = 0; i < n; i++){
        if (checkBags[i] <= 15 && handBags[i] <= 7)
        { console.log("Boarding") }
        else { console.log("Stop")}
    }
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let checkBags = input[1].trim().split(" ").map(Number);
    let handBags = input[2].trim().split(" ").map(Number);

    checkBoarding(n,checkBags,handBags)
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`4
12 14 15 6
8 5 7 4`);
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
