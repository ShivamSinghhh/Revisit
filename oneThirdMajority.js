
function thirdMajority(n, arr) {
    let x = Math.ceil(n / 3)
   // console.log(x)
    let ans = [];
    let i = 0;
    while (i < n) {
        if (arr[i] === arr[i + x]) {
            ans.push(arr[i]);
            i = i + x + 1;
        }
        else { i++ }
    }
    console.log(ans.join())

}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    // console.log(n,arr)
    arr = arr.sort((a, b) => a - b)
    thirdMajority(n, arr)

}

if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`3
  3 2 3`);
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
