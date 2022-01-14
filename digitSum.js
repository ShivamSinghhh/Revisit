let x = 137 ;

let sum = 0;
let str = ""

while (x > 0) {
    rem = x % 10;  // remainder 7 + 3 + 1
    x = x - rem;
    x = x / 10;    // 13   1

    sum = sum + rem
    str += rem +" ";
  
}

console.log(sum)
console.log(str)