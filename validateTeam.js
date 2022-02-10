
function validateTeam(n,arr,k){
    let team1 = 0;
    let team2 = 0;
    for (let i=0 ; i < 2*n; i++){
        if (i < n) 
        { team1 += arr[i]}
        else { team2 += arr[i]}
    }
   // console.log(team1,team2)
    let diff = Math.abs(team1-team2);
   // console.log(diff)
    if (diff < k) { console.log("Valid")}
    else { console.log("Invalid")}
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let [n,k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    validateTeam(n,arr,k)

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`3 4
  1 8 5 9 6 1`);
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
