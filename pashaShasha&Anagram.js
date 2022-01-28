function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) { return false; }
  
    else {
        let obj1 = {};
        let obj2 = {};
        let n = str1.length;
        for (let i = 0; i < n; i++){
            if (obj1[str1[i]] === undefined) { obj1[str1[i]] = 1 }
            else { obj1[str1[i]]++ }
            if (obj2[str2[i]] === undefined) { obj2[str2[i]] = 1 }
            else { obj2[str2[i]]++;}
        }
        for (key in obj1) {
            if (obj1[key] !== obj2[key])
            { return false;}
        }
        return true;
    }
 }

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for (let i = 0; i < test; i++){
        let str1 = input[line++].trim();
        let str2 = input[line++].trim();
        
        if (checkAnagram(str1, str2)) 
        { console.log("True") }
        else { console.log("False")}
    }
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`2
abcd
dcab
aa
aaa`);
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
