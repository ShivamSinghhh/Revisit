 
function solve(a, b, c) {
     
  let ans = "";
  let p = a.length;
  let q = b.length;
  let r = c.length;
  let n = Math.min(p,q,r)
  
    for (i = 0; i < n; i++){

        if (a[i] === b[i] && a[i] === c[i])
        { ans = ans + "" + a[i] }
        else {break}
    }

    if (ans.length == 0)
    { console.log("None") }
    else console.log(ans)
 }


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;

    for (let i = 0; i < test; i++){
        let [str1, str2, str3] = input[line++].trim().split(" ");
       // console.log(str1, str2, str3)
        solve(str1, str2, str3)
    }
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`1
rbbyrrby rbb rbbybbryb`);
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
