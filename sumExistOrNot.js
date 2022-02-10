function findSum(n,arr,k){
    for (let i = 0 ; i < n-1; i++){
        let sum = arr[i] ;
        for(let j = i+1 ; j< n; j++){
          sum += arr[j];
          if(sum === k){
              console.log("yes");
              return;
          }
        }
    }
    console.log("no");
    return;
}



function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    let k = +input[2];
    findSum(n,arr,k)

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`9
  1 2 3 4 5 6 7 8 9
  5`);
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
