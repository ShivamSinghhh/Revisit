function flipEvenRows(r,c,input){

  for (let i = 1 ; i<= r; i++){
      if(i % 2 !== 0 ){
          let ans = input[i].trim().split(" ").map(Number);
          console.log(ans.join(" "))
      }
      else{
        let ans = input[i].trim().split(" ").map(Number);
         ans = reverseArray(ans);
         console.log(ans.join(" "))
      }
  }

}

function reverseArray(arr){
    let n = arr.length;
    for(let i =0 ; i<n-i; i++){
       let temp = arr[i];
       arr[i] = arr[n-1-i];
       arr[n-1-i] = temp; 
    }
    return arr;
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let [r,c] = input[0].trim().split(" ").map(Number);
    
    flipEvenRows(r,c,input)   

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`4 2
  1 2
  3 4
  5 6
  7 8
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
