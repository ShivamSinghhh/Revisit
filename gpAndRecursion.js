let sum = 0 ;
function gpAndRecursion(n,ratio){
    if (n < 0) { return}
    else {
        sum += 1/ratio**n;
        gpAndRecursion(n-1,ratio)
    }   
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let [n,ratio] = input[0].trim().split(" ").map(Number);
    // console.log(num,n)
    gpAndRecursion(n,ratio);
    console.log(sum.toFixed(4))

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`3 5`);
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
