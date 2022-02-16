function stringDifference(s1,s2){
    let ans = "";
    for(let i = 0 ; i< s1.length; i++){
        if (s1[i] === s2[i])
           { continue}
        else { ans += s1[i]}
    }
    console.log(ans)
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let s1 = input[0].trim();
    let s2 = input[1].trim();
    stringDifference(s1,s2)

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`ABCX
  ABCD`);
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
