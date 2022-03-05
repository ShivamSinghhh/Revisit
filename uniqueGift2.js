function uniqueGift(n,arr){  
    
    let max = -1/0 ;
    let i = 0 ;
    let j = 0 ;
    let data = {};
    while(i < n  && j < n){
      if(data[arr[j]] === undefined)
        {
           data[arr[j]] = 1 ;
           let diff = j-i+1;
           if(diff > max) { max = diff}
           j++;
        }
        else{
          delete data[arr[i]];
          i++;
        }
       // if (count > max){ max = count}
    }   
    
  console.log(max)
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line  = 1 ;
    for(let i = 0 ; i < test; i++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
       // console.log(n,arr)
        uniqueGift(n,arr)
    }
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`3
  8
  1 2 1 3 2 7 4 2
  5
  1 2 1 3 4
  4
  1 2 2 1`);
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
