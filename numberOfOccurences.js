
function frequency(n,arr,k){
    let start = lowerBound(n,arr,k);
    let end = upperBound(n,arr,k);

    if(start === -1)  {console.log(-1)}
   else {console.log(end-start+1) }    
}
//-----lowerBound----------------//
function lowerBound(n,arr,k){
    let start = -1;
    let lo = 0 ;
    let hi = n-1;
    while (lo <= hi){
        let mid = Math.floor(lo+(hi-lo)/2);
        if(arr[mid] === k) 
        { 
            start = mid ;
            hi = mid-1;
        }
        else if(arr[mid]>k)
        { hi = mid-1}
        else {lo= mid+1;}
    }
   return start;
}
//-----------upperBound---------------//

function upperBound(n,arr,k){
    let end = -1;
    let lo = 0 ;
    let hi = n-1;
    while (lo <= hi){
        let mid = Math.floor(lo+(hi-lo)/2);
        if(arr[mid] === k) 
        { 
            end = mid ;
            lo = mid+1;
        }
        else if(arr[mid]>k)
        { hi = mid-1}
        else {lo= mid+1;}
    }
   return end;
}

//------------------------------------//
function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let [n,k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    arr.sort((a,b)=>a-b)
   // console.log(n,arr,k)
    frequency(n,arr,k)
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`6 3
  2 3 3 3 6 9`);
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
