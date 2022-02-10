var ans = [];
let count = 0 ;
function buyCandies(n,arr,c){
    count++;
    if (c < 0)
    { ans = []; 
      return;
    }
    else if (c === 0)
    { console.log(ans.join(" "));
      ans = [];
    }
    else {
       for(let i = 0; i <n; i++){
        buyCandies(n,arr,c-arr[i])
       } 
    }
    console.log(count)
}



function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let [n,c] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    buyCandies(n,arr,c)

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`4 7
  2 3 6 7`);
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
