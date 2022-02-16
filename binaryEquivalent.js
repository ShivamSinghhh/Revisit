
function binaryEquivalent(num,ans){
    if (num === 0 ) {return}
    else {
        let x = Math.floor(num/2);
        binaryEquivalent(x,ans)
        ans.push(num%2);      
    }   
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1 ;
    for (let i = 0 ; i< test ; i++){
        let n = +input[line++];
       // console.log(n) 
        let output = []       
        binaryEquivalent(n,output)   
        console.log(output.join(""))      
    }

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`2
  15
  128`);
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
