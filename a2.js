
let temp = 0;

function count(x, y) {
    if (y != 1) {
        if (x != 1) {
            temp++;
            count(x/2,y)
        }
        else {
            y = y - 1;
            count (16,y)
        }
    }
    return temp;
}

let x = count(16,16)

console.log(x)