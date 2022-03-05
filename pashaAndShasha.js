function pashaAndShasha(s1,s2){
    if (s1.length !== s2.length)
       { return "False"}
    else{
      for(let i =0  ; i< s1.length; i++){
          if (s1[i] !== s2[i])
          { return "False"}
      }
      return "True"
    }
}

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1 ;
    for(let i = 0 ; i< test; i++){
        let s1 = input[line++].trim().split("");
        let s2 = input[line++].trim().split("")
        s1.sort();
        s2.sort()
       // console.log(s1,s2)
       let boolean = pashaAndShasha(s1,s2)
       console.log(boolean)
    }
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`2
  abcd
  dcab
  aa
  aaa`);
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
