
function highFrequency(n,arr){
   let keys = new Array(5).fill(0);
   // console.log(keys) [0,0,0,0,0]
    for(let i = 0 ; i < n;i++){
        if (arr[i] === 1 ) {keys[0]++}
        else if (arr[i] ===2 ) {keys[1]++}
        else if (arr[i] ===3 ) {keys[2]++}
        else if (arr[i] ===4 ) {keys[3]++}
        else  {keys[4]++}
    }
    let count = 0 ;
    let num ;
   
    for(let i = 0 ; i < 5; i++){
        if(keys[i] > count) 
        {
            count = keys[i];
             num = i+1}
    }
   // console.log(keys)
    console.log(num)
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1 ;
    
    for (let i = 0 ; i <test; i++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
       // console.log(n,arr)
       highFrequency(n,arr)
    }

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`3
  5
  5 5 5 5 5
  6
  1 4 4 4 5 3
  11
  1 2 3 4 5 4 3 2 1 3 4`);
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
