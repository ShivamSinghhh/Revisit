
function numberOfWays(n,pow){
    let count = 0 ;
    let sum = 
    for (let i = 1 ; i< n; i++){

    }
}


function runProgram(input) {
    // write code here
    let [n,pow] = input.trim().split(" ").map(Number);
    console.log(n,pow)
    numberOfWays(n,pow)

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`10 2`);
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
