var arr = [0,1,1,2,1,0,1,2,0] ;

let lo = 0 ;
let mid = 0 ;
let hi = arr.length-1;

while( mid < hi){
    if( arr[mid] === 0)
    {
        [arr[lo],arr[mid]] =  [arr[mid],arr[lo]];
        lo++;
        mid++;
    }
    else if(arr[mid] === 2){
        [arr[mid],arr[hi]] =  [arr[hi],arr[mid]];
        hi--
    } else{
        mid++;
    }

}

console.log(arr)