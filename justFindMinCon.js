
let stack = [];
let min = [];

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let query = +input[0];
    for (let i = 1 ; i <= query ; i++){
       // console.log(input[i])
        let [order, value]  = input[i].trim().split(" ");
            value = +value;
        if (order === "PUSH")
           {
                stack.push(value)
             if (min.length == 0  || value <= min[min.length-1]) 
               { min.push(value)}
                      
          }
        else if (order === "POP"){
            if (stack.length) 
               {   
                   let x = stack.pop();
                    console.log(x)
                if ( x === min[min.length-1])
                   {  min.pop() }
               }
            else {console.log("EMPTY")}
        }

      else {          
                console.log(min[min.length-1])           
        }           
    }
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`11
  PUSH 5
  PUSH 7
  PUSH 3
  PUSH 8
  PUSH 10
  MIN
  POP
  POP
  MIN
  POP
  MIN`);
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
