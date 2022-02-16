
function flowerManagement(n, arr, m) {
    for (let i = 1; i < n - 1; i++) {
        if (i === 1) {
            if (arr[i] === 0 && arr[i - 1] === 0) {
                m--;
                arr[i - 1] === 1;
            }
        }
        else if (arr[i - 1] === 0 && arr[i] === 0 && arr[i + 1] === 0) {
            m--;
            arr[i] = 1;
        }
        else if (i === n - 2) {
            if (arr[i] === 0 && arr[i + 1] === 0) {
                m--;
                arr[i + 1] === 1;
            }
        }
    }

    if (m <= 0) { console.log("Yes") }
    else { console.log("No") }
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for (let i = 0; i < test; i++) {
        let [n, m] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        // console.log(n,arr,m);
        flowerManagement(n, arr, m)
    }

}

if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`1
  5 1
  1 0 0 0 1`);
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
