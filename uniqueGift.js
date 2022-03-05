
function solve(str) {
    
    let data = {};
    let nstr = "";

    for (let i = 0; i < str.length; i++){
        let flag = false;
         
        if (data[str[i]] === undefined)
        {
            data[str[i]] = 1
        }
        else {
            data[str[i]]++
        };
        
        for (key in data) {
            if (data[key] == 1)
            {
                nstr = nstr + "" + key;
                flag = true;
                break;
            }
        }

        if (flag == false) {nstr = nstr +""+"#"}       

    }
    console.log(nstr)
}


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;

    for (let i = 0; i < test; i++){
        let str = input[line++].trim();
       // console.log(str);
        solve(str)

    }
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`2
abadbc
abcabc`);
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
