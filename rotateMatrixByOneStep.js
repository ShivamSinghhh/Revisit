function rotateMatrix(n, mat) {
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        let temp = mat[i][i];

    //----shifting element  in top row----//
        for (let i = left; i < right; i++) {
            let innerTemp = mat[top][i+1]
            mat[top][i + 1] = temp;
            temp = innerTemp;
        }
        top++;

    //-----shifting element  in last coloumn------//
        for (let i = top; i <= bottom; i++) {
            let innerTemp = mat[i][right];
            mat[i][right] = temp;
            temp = innerTemp;
        }
        right--;
    //-----shifting element  in bottom row------//
        for (let i = right; i >= left; i--) {
            let innerTemp = mat[bottom][i];
            mat[bottom][i] = temp;
            temp = innerTemp;
        }
        bottom--;

    //-----shifting element  in first coloumn------//    
        for (let i = bottom; i >= top; i--) {
            let innerTemp = mat[i][left];
            mat[i][left] = temp;
            temp = innerTemp;
        }
        left++;
       
        mat[i][i] = temp; // changing the first element of the loop

    }
   // console.log(mat)
    for (let i = 0 ; i < n; i++){
        console.log(mat[i].join(" "));
    }
}



function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let mat = [];
    for (let i = 1; i <= n; i++) {
        let row = input[i].trim().split(" ").map(Number);
        mat.push(row)
    }
    // console.log(mat) ;
    rotateMatrix(n, mat)
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
        process.exit(0);
    });
}
