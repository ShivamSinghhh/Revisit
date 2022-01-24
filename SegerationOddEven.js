
function arrangeArray(n, arr, k) {
    let odd = [];
    let even = [];

    arr.forEach(el => {
        if (el % 2 != 0)
        { odd.push(el) }
        else{ even.push(el)}
    });
   // console.log(odd, even)
    
    if (k === 1) { console.log(even.join(" "), odd.join(" ")) }
    else { console.log(odd.join(" "), even.join(" ")) }
}




function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;

    for (let i = 0; i < test; i++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        let k = +input[line++]

     arrangeArray(n,arr,k)
    }
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`2
5
5 3 2 4 5
1
5
1 2 3 4 5
2`);
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
