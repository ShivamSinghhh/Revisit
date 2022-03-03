function birthDayShopping(n,arr,k,curr,ans){
    if (ans.length === k) 
    { console.log(ans.join(" "))}

    if (ans.length === n) {return}

    for(let i = curr; i<n; i++){
        ans.push(arr[i]);
        birthDayShopping(n,arr,k,i+1,ans);
        ans.pop();
    }    
}

function runProgram(input) {

    // write code here
    input = input.trim().split("\n");
    let [n,k] = input[0].trim().split(" ").map(Number);

    let arr = [];
    for (let i = 1 ; i <= n  ; i++){
        arr.push(i);
    }
   // console.log(n,arr,k)
   birthDayShopping(n,arr,k,0,[])
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`3 1`);
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
