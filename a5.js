
function uniqueOddSubset(n,arr,k,curr,ans){
    if (ans.length >= k ) 
    { console.log(ans)}
    
    for (let i = curr ; i<arr.length ;i++){
        ans.push(arr[i]);
        uniqueOddSubset(n,arr,k,i+1,ans);
        ans.pop()
    }
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    let k = +input[2];
   // console.log(n,arr,k)
    uniqueOddSubset(n,arr,k,0,[])

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`3 
  1 2 3
  2`);
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
