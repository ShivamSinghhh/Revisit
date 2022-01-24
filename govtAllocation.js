
function allot(n, m, k, gov, man) {
    let gi = 0;
    let mi = 0;
    let count = 0;

    while (gi < n && mi < m) {
        if (man[mi] >= gov[gi] - k && man[mi] <= gov[gi] + k)
        {
            count++;
            mi++;
            gi++;
        }
        else if (man[mi] > gov[gi] + 5)
        { gi++ }
        else if (man[mi] < gov[gi] - 5)
        { mi++ }
    }
  console.log(count)
 }




function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [n, m, k] = input[0].trim().split(" ").map(Number);
    let gov = input[1].trim().split(" ").map(Number);
    let man = input[2].trim().split(" ").map(Number);
    gov.sort((a, b) => a - b);
    man.sort((a, b) => a - b);
   // console.log(n,m,k)
    
    allot(n,m,k,gov,man)
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`4 3 5
60 45 80 60
30 60 75`);
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
