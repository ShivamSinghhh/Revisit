function maxProduct(n,arr){
  
    return arr[n-1]*arr[n-2];
}

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1 ;
    for (let i =0 ; i < test ; i++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        arr = arr.sort((a,b)=>a-b)
        console.log(maxProduct(n,arr))
    }

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`3
  6 
  1 0 7 2 4 0
  5
  1 2 3 4 5
  2
  0 0`);
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
