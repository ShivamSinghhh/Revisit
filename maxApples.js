function maxApples(n,arr,w){
    let count = 0 ;
     
    for(let i = 0 ; i< n; i++){
        w = w - arr[i];
        if(w >= 0) { count++} 
        else { return count}       
    }
    return count;
       
}

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let [n,w] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    arr = arr.sort((a,b)=>a-b);

    console.log(maxApples(n,arr,w));


}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`4 20
  3 10 4 4 `);
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
