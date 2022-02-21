
function stringCoordinates(n,str){
    let x = 0 ;
    let y = 0 ;

    for (let i = 0 ; i<n ;i++){
       // console.log(str[i])
        switch(str[i]){

            case "u":  x=x+1 ; break
            case "d" : x= x-1 ; break;
            case "l" : y= y-1 ; break ;
            case "r" : y = y+1 ; break;
            default : break;
           
        }
      // console.log(x,y)
    }

    console.log(`${x} ${y}`)

}

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let str = input[1].trim();
   // console.log(n,str);
    stringCoordinates(n,str)
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`5
  ulrdr`);
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
