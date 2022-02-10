function solve(n,arr,k){

    let sum  = 0 ;

    for(let i = 0 ; i < k ; i++ ){
        sum += arr[i]
    }
   let max = sum;
    
    for (let i = 0; i < n-k; i++){
        sum = sum + arr[i+k] ;
        sum = sum - arr[i] ;
        if (sum > max) { max = sum}
    }
  console.log(max)
}




function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let [n,k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);

    solve(n,arr,k)


}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`10 3
-1 -1 -2 1 -2 4 1 9 3 9`);
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
