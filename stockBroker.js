
function bestTimeToBuyAndSellStock(n,prices){
    let min = prices[0];
    let max = 0;
    let diff = 0 ;

    for(let i =1 ; i< n; i++){
        if (prices[i] < min)
        { min = prices[i]}
        else{
            diff = prices[i]-min;
            if(diff > max)
            { max = diff}
        }
    }
  console.log(max)
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line  =1 ;
    for(let i = 0 ; i < test; i++){
        let n = +input[line++];
        let prices = input[line++].trim().split(" ").map(Number);
      //  console.log(n,prices)
        bestTimeToBuyAndSellStock(n,prices)
    }
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`2
  6
  7 1 5 3 6 4
  4
  4 3 2 1
  `);
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
