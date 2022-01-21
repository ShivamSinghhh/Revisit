
let stack = [];
let min = [];


function push(x) {
    stack.push(x)
    if (min.length == 0)
    {
        min.push(x);
    }
    else if (x <= min[min.length - 1])
    {
        min.push(x)
    }

    return;
}

function findMin() {
    if (min.length == 0)
    {
        console.log("EMPTY");
        return;
    }
    console.log(min[min.length - 1]);
    return;
}

function pop() {

    if (stack.length != 0) {
        let x = stack[stack.length - 1];
        stack.pop();
        if (x == min[min.length - 1]) { min.pop(); }
    }
    else {
        console.log("EMPTY")
    }

}

    function runProgram(input) {
        // Write code here
        input = input.trim().split("\n");
        let test = +input[0];
        let line = 1;

        for (let i = 0; i < test; i++) {
            let a = input[line++].trim().split(" ");
            // console.log(+a[1])
            if (a[0] == "PUSH") { push(+a[1]) }
            else if (a[0] == "MIN") { findMin() }
            else if (a[0] == "POP") { pop() }
        }
        // console.log(input)
    }
    if (process.env.USERNAME === "Cvam's Singhh") {
        runProgram(`11
PUSH 5
PUSH 7
PUSH 3
PUSH 8
PUSH 10
MIN
POP
POP
MIN
POP
MIN`);
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
