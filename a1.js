
function maxProduct(n,arr){
    let max = -1/0 ;
    for (let i = 0 ; i< n ;i++){
        let prod = 1 ;
        for (let j= i ; j< n; j++){
             prod = prod*arr[j];
            
            if (prod >= max)
               { max = prod}
           // console.log("prod =",prod,"max =",max, )
        }
      }      
      console.log(max)
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1 ;
    for (let i = 0 ; i < test ; i++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        // console.log(n,arr)
         maxProduct(n,arr)
    }

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`2
  3
  -3 0 -2
  4
  4 5 -1 2`);
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
