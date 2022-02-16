function greatestCommonDevisor(a,b){
    if (a % b === 0) { return b}
    else {
        let x = a % b;       
       return greatestCommonDevisor(b,x);
    }

}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line  = 1 ;
    for (let i = 0 ; i < test;i++){
        let [a,b] = input[line++].trim().split(" ").map(Number);
       // console.log(a,b);
       let x = greatestCommonDevisor(a,b,1)
       console.log(x)
    }

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`2
  6 11
  15 135`);
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
