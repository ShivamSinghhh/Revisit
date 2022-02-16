function  findUpdate(maj,majN,min,minN,pat,patN){
  if (maj>majN) {return false}
  else if (maj< majN) {return true}

  else if (min>minN ) {return false}
  else if (min < minN) { return true}

  else if (pat>= patN ) { return false}

  else return true;

}

function runProgram(input) {
    // write code here
 input = input.trim().split("\n");
 let test = +input[0];
 let line = 1;
 for (let i =0 ; i < test ; i++){
     let [maj,min,pat] = input[line++].trim().split(".").map(Number);
     let [majN,minN,patN] = input[line++].trim().split(".").map(Number);
    let ans = findUpdate(maj,majN,min,minN,pat,patN);
    if (ans) { console.log("True")}
    else {console.log("False")}
 }
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`3
  2.0.1
  1.9.8
  12.0.1
  12.10.0
  1.1.10
  1.1.12`);
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
