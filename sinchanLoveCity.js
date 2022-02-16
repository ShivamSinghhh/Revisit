
function sinchanLoveCity(cities,quality,value){
    let amount = 0 ;
    for (let i = 0 ; i < value.length-1; i++){
        amount += value[i+1]-value[i];        
    }
    console.log(quality*amount)

}

function runProgram(input) {
    // write code here   
    input = input.trim().split("\n");
    let test = +input[0];
    let line =  1; 
    for (let i = 0 ; i< test; i++){
        let [cities,quality] = input[line++].trim().split(" ").map(Number);
        let value = input[line++].trim().split(" ").map(Number);
        value = value.sort((a,b)=>a-b) ;
        sinchanLoveCity(cities,quality,value);
    }

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`2
  2 4
  2 1
  1 5
  3`);
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
