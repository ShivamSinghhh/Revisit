
function twoSorted(n, arr1, arr2) {
    let count = 0;
    let lo = 0;
    let hi = n - 1;
    while (lo < n && hi >= 0) {
        if (arr1[lo] === arr2[hi]) {
            count++;
            lo++;
            hi--;
        }
        else if (arr1[lo] > arr2[hi]){
            hi--
        }else{
            lo++;
        }
    }
    console.log(count)
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for (let i = 0; i < test; i++) {
        let n = +input[line++];
        let arr1 = input[line++].trim().split(" ").map(Number);
        let arr2 = input[line++].trim().split(" ").map(Number);
        // console.log(n,arr1,arr2);
        twoSorted(n, arr1, arr2)
    }

}

if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`1
  6
  1 2 2 3 4 5
  4 4 3 2 1 1`);
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
