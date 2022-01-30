function countNames(arr) {
    let n = arr.length;
    let data = {};
    for (let i = 0; i < n; i++){
        let x = arr[i];
        if (data[x] === undefined) { data[x] = 1 }
        else { data[x]++;}
    }
    
    for (let key in data) {
        console.log(key,data[key])
    }
 }




function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let arr = [];
    for (let i = 1; i <= input[0]; i++){
        arr.push(input[i].trim())
    }    
    arr = arr.sort()
   // console.log(arr)
    countNames(arr)  
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`3
maas
apples
masai`);
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
      process.exit(0) ;
    });
  }
