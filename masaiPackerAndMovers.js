
let count = 0 ;

function masaiPackerAndMovers(n,arr,k){
    if (k === 0) {count++; return}
    if (k < 0) { return}
    
    else{
        for(let i = 0 ;i < n; i++){
            masaiPackerAndMovers(n,arr,k-arr[i])
        }
    }
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let [k,n] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
   // console.log(n,arr,k);
    masaiPackerAndMovers(n,arr,k);
    console.log(count)
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`3 3
  1 2 3`);
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
