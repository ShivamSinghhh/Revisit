function solve(n, arr, x, y, q1) {
  let person = 0;
  arr.forEach((el, i) => {
   // console.log("el =",el,"ind =",i)
    if (i+1+ x <= q1 && i+1 + y >= q1)
      { person += el}
    
  });
  return person;
  
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
   // console.log(input);
    let n = +input[0];  
    let arr = input[1].trim().split(" ").map(Number);
    let [x, y] = input[2].trim().split(" ").map(Number);
    let q = +input[3];
 // console.log(arr, x, y, q)
    let line = 4
        for (let i = 0; i < q; i++){
            let q1 = +input[line++];
         // console.log(q1)
          console.log(solve(n,arr,x,y,q1))
          
        }  
   
}
  

  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`6
1 0 3 6 2 5
1 3
4
1
2
6
4`);
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
      process.exit(0) ;
    });
  }
