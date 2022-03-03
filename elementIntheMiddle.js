
function elementIntheMiddle(n,arr){   

    for(let i = 1; i < n-1; i++){
       let left_flag = true;
       let right_flag = true;
        for(let j = 0 ; j< i; j++){
            if(arr[j]>= arr[i])
            { left_flag = false}
        }
        
        for(let j = i+1 ; j< n; j++){
            if (arr[j] <= arr[i])
            { right_flag = false}
        }

        if(left_flag && right_flag)
         { 
             console.log(arr[i]);
             return;
        }
    }
  console.log(-1)
}

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
   // console.log(n,arr)
    elementIntheMiddle(n,arr)
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`5
  4 3 6 7 8`);
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
