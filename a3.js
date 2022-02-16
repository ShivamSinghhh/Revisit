
 function walkInPark(row,col,mat){
     let elements = row*col ;

     let i = 0 ;
     let j = 0 ;
     let count = 0 ;

    while (i >= 0 && i < row && j >= 0 && j < col && count <= elements){
        
        if (mat[i][j] === "L")       { mat[i][j] = 0;  j-- ;}
        else if (mat[i][j] === "R")  { mat[i][j] = 0;  j++ ; }
        else if (mat[i][j] === "U")  { mat[i][j] = 0;  i-- ;}
        else if (mat[i][j] === "D")  { mat[i][j] = 0;  i++ ;}

         else { console.log("counts= ",count,mat[i][j]); return}
         count++;        
    }
    console.log(count) ;


 }

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1 ;
    for (let i = 0 ; i< test ;i++){
        let mat = [];
        let [row,col] = input[line++].trim().split(" ").map(Number);
        for (let j = 0 ; j <row ; j++){
            let x = input[line++].trim().split("")
            mat.push(x)
            walkInPark(row,col,mat)
        }
       
        console.log(mat)
    }

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`1
  3 4
  RRDR
  LLUD
  LLLL
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
