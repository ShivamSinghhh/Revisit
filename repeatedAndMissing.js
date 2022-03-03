
function repeatedAndMissing(n, arr) {
    let missing = -1;
    let repeated = -1;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] === arr[i + 1])
            repeated = arr[i];
    }
    for (let j = 0; j < n; j++) {
        if (j === 0) {
            if (arr[j] !== j + 1) {
                missing = j + 1;
                break;
            }
        }
        else if (j === n - 1) {
            arr[j] !== j + 1;
            missing = j + 1;
            break;
        }
        else if ( j+1 === arr[j-1] || j+1 === arr[j] ||  j+1 === arr[j+1]) {
          continue;
        }
        else {
            missing = j+1;
            break;
        }


    }
    console.log( missing,repeated)
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for (let i = 0; i < test ; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        arr.sort((a, b) => a - b);
       // console.log(n, arr);
        repeatedAndMissing(n, arr);

    }
}

if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`3
  5
  1 2 3 3 4 
  2
  2 2
  3
  1 2 2`);
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
