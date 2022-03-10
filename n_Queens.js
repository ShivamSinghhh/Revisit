let count = 0;
function queensVariant(chessBoard,row) { 
  
    if (row >= chessBoard.length) {
       // console.log(chessBoard)
        count++;
        return ;
    }
   for (let col = 0; col < chessBoard.length; col++) {           
            if (isSafe(chessBoard, row, col))
             {
                chessBoard[row][col] = 1;
                queensVariant(chessBoard, row + 1) 
                chessBoard[row][col] = 0;
             }  
      }
}


//--------Is Safe position------------//

function isSafe(chessBoard,row,col) {

    //--- checking prior value of the same column----//
    let i = row - 1;
    let j = col;

    while (i >= 0) {
        if (chessBoard[i][j] === 1) { return false }
        i--;
    }

    //--- checking for left diagonal attack----//
     i = row-1;
     j = col-1;
    while (i >= 0 && j >=0) {
        if (chessBoard[i][j] === 1) { return false }
        i--;
        j--;
    }

      //--- checking for right diagonal attack----//
      i = row-1;
      j = col+1;
     while (i >= 0 && j < chessBoard.length) {
         if (chessBoard[i][j] === 1) { return false }
         i--;
         j++;
     }

     return true;

}

//---------Making Chess Board--------//
function makeChessBoard(n) {
    let mat = []
    for (let i = 0; i < n; i++) {
        let row = new Array(n).fill(0);
        mat.push(row)
    }
    return mat;
}

//-----input taking part------------//

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
   // console.log(n)
    let chessBoard = makeChessBoard(n);  
    queensVariant(chessBoard,0);
    console.log(count)
}

if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`4`);
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
