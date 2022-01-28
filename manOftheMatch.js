
function manOfTheMatch(n, runs) {
    let Dev = true;
    let virat = false;
    let DevRuns = 0;
    let viratRuns = 0;

    for (let i = 0; i < runs.length; i++){
        if (Dev)  // Dev ---on strike---
        {
            DevRuns += runs[i];
            if (runs[i] === 1 || runs[i] === 3) {
                Dev = false;
                virat = true;
            }
       
        }
        //--------virat-- on strike
        else {
            viratRuns += runs[i];
            if (runs[i] === 1 || runs[i] === 3) {
                virat = false;
                Dev = true;
            }
        }
        if ((i + 1) % 6 == 0)
        {
            if (Dev) {
                Dev = false;
                virat = true;
            }
            else {
                virat = false;
                Dev = true;
            }
        }    
     
    }
    console.log("Dev =", DevRuns)
    console.log("virat =",viratRuns)
    if (DevRuns > viratRuns) { console.log("AB de Villiers") }
    else if (DevRuns < viratRuns) { console.log("Virat Kohli") }
    else { console.log("Tie") };
   
    
}




function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for (let i = 0; i < test; i++){
        let n = +input[line++];
        let runs = input[line++].trim().split(" ").map(Number);

        // console.log(n, runs)
        manOfTheMatch(n,runs)
    }
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`3
2
1 2 0 0 1 1 6 6 4 1 6 1
3
0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
1
0 1 0 1 0 0`);
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
