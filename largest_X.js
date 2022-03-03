
function findLargest(n,arr){
    let lo = 0 ;
    let hi = n-1;
    let ans = -1;
    while (lo < hi) {
        if(-arr[lo] === arr[hi])
        {
             ans = arr[hi];
             break;
        }
        if(-arr[lo] > arr[hi]) 
        { lo++}
       else { hi--;}
    }
    return ans;
}

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1 ;
    for(let i = 0 ; i< test;i++){
         let n = +input[line++];
         let arr = input[line++].trim().split(" ").map(Number);
         arr.sort((a,b)=>a-b);
        // console.log(n,arr);
        let x = findLargest(n,arr)
        console.log(x)

    }
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`2
  5
  2 1 -1 -2 3
  5
  -3 2 -4 4 -2`);
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
