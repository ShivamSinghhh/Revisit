function solve(n, arr, k) {
    let data = {}
    for (let i = 0; i < n; i++){
        if (data[arr[i]] === undefined)
        { data[arr[i]] = 1; }  
        else {
            data[arr[i]]++;
        }
    }
   // console.log(data)

    for (let i = 0; i < n; i++){
        let x = k - arr[i];
        if (x === arr[i]) 
        {
            if (data[x] > 1) { console.log(1); return;}
         }
        else if (data[x] != undefined) 
                { console.log(1); return;}
    }

    console.log(-1) 
    
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    
    for (let i = 0; i < test; i++){
        let [n, k] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);

       // console.log(n,arr,k)
          solve(n,arr,k)
    }

   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`1
5 6
3 4 0 3 7`);
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
