
function gasStation(n,station,cost){
        let tank = 0;
        let curr = 0 
        let start = -1 ;
     
        for(let i = 0; i < n; i++) {
            let resFuel = station[i] - cost[i];
            curr = curr + resFuel;
            if(curr < 0) {
                start = i+1;
                curr = 0 ;                         
            } 
            tank += resFuel  
        }
        if(tank >= 0)
        { console.log(start)}
        else { console.log(-1)}
   
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let station = input[1].trim().split(" ").map(Number);
    let cost = input[2].trim().split(" ").map(Number);

   // console.log(n,station,cost)
    gasStation(n,station,cost)

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`5
  1 2 3 4 5
  3 4 5 1 2`);
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
