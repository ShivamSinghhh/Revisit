let minDays = +1/0;
let maxDays = -1/0;

function minAndMaxDaysMasaiPackerMovers(n,arr,k,count){   
    if (k === 0)
     {
         if(minDays > count) { minDays = count;}
         if(maxDays < count) { maxDays = count}
     }
    if (k < 0 )   {return}

     else {
            for(let i = 0 ; i < n ; i++){
             minAndMaxDaysMasaiPackerMovers(n,arr,k-arr[i],count+1)
        }
    }

}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
   
    let [k,n] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);   
    console.log(n,arr,k);
    minAndMaxDaysMasaiPackerMovers(n,arr,k,0);

    if(maxDays === -1/0  ||  minDays === 1/0)
    { console.log(-1)}
   else{ console.log(minDays,maxDays) }
 
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`3 3
  1 2 3`);
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
