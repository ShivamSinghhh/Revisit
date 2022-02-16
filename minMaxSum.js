
function minMax(n,arr,m){
    let min = 0 ;
    let max = 0 ;
    for (let i = 0 ; i < n ; i++ ){
        if ( i < m)
           { min += arr[i]} ;
        if ( i >= n-m )
           { max += arr[i]}
    }

    console.log(max-min)

}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1 ;
    for (let i = 0 ; i < test ;i++){
        let [n,m] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        arr = arr.sort((a,b)=>a-b)
        minMax(n,arr,m)
    }

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`1
  5 1
  1 2 3 4 5`);
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
