
function equilibriumElement(n, arr) {
    let total = arr.reduce((acc, ele) => {
        return acc + ele;
    }, 0)
   // console.log(total)
    let newSum = 0;
    for (let i = 0; i < n; i++) {
        total -=arr[i];     
        if (newSum === total) {
            console.log(arr[i]);
            break;
        }
        newSum += arr[i]
       
    }
}

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
   // console.log(n, arr)
    equilibriumElement(n, arr)
}

if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`5
  3 3 5 5 1`);
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
