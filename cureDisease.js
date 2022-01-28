function checkPatients(n, vaccines, midichlorians) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (vaccines[i] > midichlorians[i])
        { count++ }    
      
    }
    if (count === n) { console.log("Yes") }
    else { console.log("No")}
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let vaccines = input[1].trim().split(" ").map(Number);
    let midichlorians = input[2].trim().split(" ").map(Number);
    vaccines.sort((a, b) => a - b);
    midichlorians.sort((a, b) => a - b);

    checkPatients(n, vaccines, midichlorians)

}
if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`5
123 146 454 542 456
100 328 248 689 200`);
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
