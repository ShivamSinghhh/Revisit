
function oddOneOut(a,b,c){

    if (b === c && b !== a) { console.log(a)}
    else if (a === c && b !== c) { console.log(b)}
    else if (a === b && b !== c) { console.log(c)}
    else {console.log(0)}
}



function runProgram(input) {
    // write code here
    let [a,b,c] = input.trim().split(" ").map(Number);
    
    oddOneOut(a,b,c)

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`2 2 2`);
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
