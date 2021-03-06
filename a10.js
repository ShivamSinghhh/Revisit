
function oppQuickSort(arr,lo,hi){
    if(lo < hi) // checking for atleast 2 elements;
    {
        let index = getPivot(arr,lo,hi);
        oppQuickSort(arr,lo,index-1);
        oppQuickSort(arr,index+1,hi)
    }
    else{return}
}

function getPivot(arr,lo,hi){
   let mid = Math.floor(lo+(hi-lo)/2);
   let pivot = arr[mid];
   let i = lo;
   let j = hi;

   while(i < j){
        while (arr[i] < pivot)  { i++ };
        while (arr[j] > pivot)  { j-- };
        
        if (i < j){
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
   }
   return i;
}



function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    console.log(n,arr)
    oppQuickSort(arr,0,n-1);
    console.log("arr",arr)
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`5
  3 5 0 9 8`);
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
