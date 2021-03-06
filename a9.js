
function repeatedAndMissing(n,arr){
    let missing ;
    let repeated ;
    for(let i = 0 ; i < n; i++){
        if (arr[i] !== i+1) { missing = i+1}
        if (arr[i] === arr[i+1]) { repeated = arr[i]}
    }
    console.log(`${missing} ${repeated}`)

}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1 ;
    for (let i =0 ; i < test; i++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
       // console.log(n,arr);
        arr = arr.sort((a,b)=>a-b)
        repeatedAndMissing(n,arr)
    }

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`3
  5
  1 2 3 3 4
  2
  1 1
  3
  1 2 2`);
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
