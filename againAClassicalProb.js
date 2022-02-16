
function checkBalance(str){

    let stack = [];

    for (let i = 0 ; i < str.length; i++){

        if (str[i] === "{") { stack.push("}")}
        else if (str[i] === "(") { stack.push(")")}
        else if (str[i] === "[") { stack.push("]")}

        else{
            if (stack[stack.length-1] !==  str[i] )
               { return "not balanced"}
            else {
                stack.pop()
            }

        }     

    }
      if(stack.length === 0) { return "balanced"}
      else { return "not balanced"}
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1 ;
    for (let i = 0 ; i < test; i++){
        let str = input[line++].trim();
        // console.log(str)
       console.log(checkBalance(str));
    }

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`3
  {([])}
  ()
  ([]
  `);
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
