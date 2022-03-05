function allTwiceExceptOne(n,arr){
    if (n===1) {return arr[0]}
    let prod = arr[0];
    for(let i = 1 ; i < n;i++){
        prod = prod ^ arr[i];
        console.log("Prod",prod)       
    }
    return prod;
}

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for(let i = 0; i< test;i++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
      //  console.log(n,arr)
       let unique = allTwiceExceptOne(n,arr);
       console.log(unique)
    }
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`2
  1
  5
  5
  1 2 1 3 2`);
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
