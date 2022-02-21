
let count = 0 ;
function powerSum(n,k,curr,arr,ans){
    if (ans.length > 0 ) 
    {   
        let sum = ans.reduce((acc,el)=>{
            return acc+el
        })
        if (sum === n) { count++}
    }
    for(let i = curr ; i<arr.length ;i++){
        ans.push(arr[i]);
        powerSum(n,k,i+1,arr,ans);
        ans.pop()
    }  
}

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let [n,k] = input[0].trim().split(" ").map(Number);
   // console.log(n,k)
   let arr = [] ;
   for (let i = 1 ; i <= n ; i++){
       let temp = Math.pow(i,k)
       if (temp <= n) {
           arr.push(temp)
       }  
       else { break}  
   }
   let curr = 0 ; 
   // console.log("arr =",arr)
    let ans = []
    powerSum(n,k,curr,arr,ans);
    console.log(count)

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`10 2`);
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
