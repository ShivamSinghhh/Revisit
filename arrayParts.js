
function arrayParts(n,arr){
    let c1 = 0 ;
    let c2 = 0 ;
    let c3 = 0 ;
    let c4 = 0 ;

    for(let i= 0;  i< n;i++){
        if(i < n/4) { c1+= arr[i]}
        else if ( i >= n/4  && i < n/2) { c2 += arr[i]}
        else if ( i>= n/2 && i < 3*n/4) { c3 += arr[i]}
        else { c4 += arr[i]}
    }
    let ans = 2*c1 + c2 + 2*c3 + c4 ;
    console.log(ans)
}

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
   // console.log(n,arr)
    arrayParts(n,arr)
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`8
  1 2 3 4 5 6 7 8`);
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
