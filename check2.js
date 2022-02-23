
function checkPalindrome(n,str){
    let data = {};
    for (let i = 0 ; i < n ;i++){
        if (data[str[i]] === undefined)
        { data[str[i]] = 1}
        else {data[str[i]]++}
    }
   // console.log(data);
    let count = 0 ;
    for(let k in data){
       if(data[k]%2 === 1)
       { count++}
    }
    if (count > 1) { console.log("Not Possible!")}
    else { console.log("Possible!")}
}



function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for (let i = 0 ; i < test; i++){
        let n = +input[line++];
        let str = input[line++].trim();
       // console.log(n,str)
       checkPalindrome(n,str)
    }
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`2
  6
  aabbcc
  5
  aabcd`);
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
