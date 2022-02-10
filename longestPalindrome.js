
let max = 1;
let start = 0;
let end = 0;

function longestPalindrome(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i; j < input.length; j++) {
            if (isPalindrome(i, j, input))
             { 
                let len = j-i + 1;
                if (len > max) {
                    max = len;
                    start = i;
                    end = j;
                }
            }
        }
    }
  console.log(max);
  let ans = "";
  for(let i= start; i<= end; i++){
      ans +=input[i];
  }
  console.log(ans)
}

function isPalindrome(lo, hi, str) {
    while (lo <= hi) {
        if (str[lo] !== str[hi]) { return false }
        else { lo++; hi-- }
    }
    return true;
}


function runProgram(input) {
    // write code here
    input = input.trim();
    longestPalindrome(input)
  
}

if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`thisracecarisgood`);
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
