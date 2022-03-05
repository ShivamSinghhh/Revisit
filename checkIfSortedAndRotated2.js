
function checkIfSortedAndRotated(n,arr){
    let min = getMinIndex(n,arr);
    if (min === 0)
    {      
        return "NO";
    }
    let leftPart = ifSorted(arr,0,min-1);
    if(!leftPart) {return "NO"}
    let rightPart = ifSorted(arr,min,n-1);
    if(rightPart) { return "YES"}
    else { return "NO"}
}

function getMinIndex(n,arr){
    let lo = 0 ;
    let hi = n-1;
    let min = 1/0;
    let index = -1;

        while(lo <= hi){
        let mid = Math.floor(lo+(hi-lo)/2);
        if (arr[mid] > arr[hi])
           { lo = mid+1}
        else { hi = mid-1;}

        if(arr[mid] < min)
           { 
               min = arr[mid];
               index = mid;
            }
    }
   // console.log("Index",index)
    return index;
}

function ifSorted(arr,lo,hi){
    for(let i = lo ; i  <= hi-1 ; i++){
        if(arr[i] > arr[i+1])
        { return false}
    }
    return true;
}



function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n  = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
   // console.log(n,arr)
   let boolean = checkIfSortedAndRotated(n,arr);
   console.log(boolean)
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`6
  1 4 7 9 1 1`);
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
