
function canBeSorted(arr,reverse){
   
    if (isSorted(arr)  || isSorted(reverse))
    { console.log("YES")}
    else { console.log("NO")}
}

function isSorted(arr){
    for (let i = 0 ; i< arr.length;i++){
        if (arr[i] > arr[i+1])
        { return false}
    }
    return true;
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    let reverse = arr.sort((a,b)=>a-b) ;
    canBeSorted(arr,reverse)

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`10
  -1 0 1 2 3 10 9 7 6 4`);
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
