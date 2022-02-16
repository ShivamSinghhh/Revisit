
function checkBalance(str){

    let stack = [];

    for (let i = 0 ; i < str.length; i++){

        if (str[i] === "{") { stack.push("}")}
        else if (str[i] === "(") { stack.push(")")}
        else if (str[i] === "[") { stack.push("]")}

        else if(str[i] === "}" || str[i] === ")" || str[i] === "]"){
            if (stack[stack.length-1] !==  str[i] )
               { return "unbalanced"}
            else {
                stack.pop()
            }
          } 
        else {continue}

    }
      if(stack.length === 0) { return "balanced"}
      else { return "unbalanced"}
}


function runProgram(input) {
    // write code here
    input = input.trim();    
    console.log(checkBalance(input));   

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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
