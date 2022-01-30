
function rotateMat(n,mat) {
    
    for (let r = 0; r < Math.floor(n/2); r++){
        
        for (let c = r; c < n - r - 1; c++){
            let temp = mat[r][c];
            mat[r][c] = mat[][c]
            Math.ro
           
        }

    }
}



function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let mat = [];
    for (let i = 0; i < n; i++){
        let row = input[i + 1].trim().split(" ").map(Number);
        mat.push(row)
    }
    console.log(mat)
    rotateMat(n,mat);
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`4
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4`);
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
