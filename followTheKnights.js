
function makeChessBoard() {
    let matrix = [];
    for (let i = 0; i < 10; i++) {
        let row = new Array(10).fill(0);
        matrix.push(row)
    }
    return matrix;
}

function followTheKnights(i, j, n,mat) {    
    if (i < 0 || i >= 10 || j < 0 || j >= 10) { return }
    if (n === 0) {
        mat[i][j] = 1;
        return;
    }
   else{
    //-----left side movements-----//
    followTheKnights(i + 1, j - 2, n - 1,mat)
    followTheKnights(i - 1, j - 2, n - 1,mat)

    //-----right side movements-----//
    followTheKnights(i + 1, j + 2, n - 1,mat)
    followTheKnights(i - 1, j + 2, n - 1,mat)

    //-----Up side movements-----//
    followTheKnights(i - 2, j + 1, n - 1,mat)
    followTheKnights(i - 2, j - 1, n - 1,mat)

    //-----Down side movements-----//
    followTheKnights(i + 2, j + 1, n - 1,mat)
    followTheKnights(i + 2, j - 1, n - 1,mat)
  }

}

//--------number of Moves------------//
 function numberOfMoves(mat){
     let count = 0 ;
     for(let i = 0 ; i < 10; i++){
         for(let j =0 ; j < 10 ;j++){
             if (mat[i][j] === 1)
             {count++}
         }
     }
     return count;
 }


    
function runProgram(input) {
    // write code here  
    let [x, y, n] = input.trim().split(" ").map(Number);   
    let mat = makeChessBoard(); 
     followTheKnights(x-1, y-1,n,mat);
    // console.log(mat);
     let count = numberOfMoves(mat);
     console.log(count)
}

if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`3 3 1`);
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
