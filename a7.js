let text = "abracadabra";
let prefix = "habrahabr";
let suffix = "bracket";
// final = abrac

let totalSubstrings = [];
let maxPre = 0;
let maxSuff = 0;

 genrateSubstrings(text,0,[]);

 let finalOutput = prefixSuffix(prefix,suffix,maxPre,maxSuff);
console.log(finalOutput);

 console.log(maxPre);
 console.log(maxSuff)

 //-----------generate all substrings-------------------//
function genrateSubstrings(text,curr,ans){ 
    if (ans.length > 0 ) 
    { 
        let countPre = preFixCheck(ans,prefix);
        let countSuff = suffixCheck(ans,suffix);
        if(countPre > maxPre) { maxPre = countPre}
        if(countSuff > maxSuff) { maxSuff = countSuff}
        totalSubstrings.push([...ans]);
    }
    if (curr > text.length) { return}

    for (let i = curr ; i < text.length;  i++){
        ans.push(text[i]);
        genrateSubstrings(text,i+1,ans);
        ans.pop()
    }
}

//---------------------- prefix check----------------------------//
function preFixCheck(text,prefix){
    let count = 0 ;
    for (let i = 0 ; i < text.length && i < prefix.length ; i++){
           if (text[text.length-1-i] == prefix[prefix.length-1-i] )
           { count++}
           else {break}
    }
  return count;
}

//--------------------suffix check------------------------//
function suffixCheck(text,suffix){
    let count = 0 ;
    for (let i = 0 ; i < text.length && i < suffix.length ; i++){
           if (text[i] == suffix[i] )
           { count++}
           else {break}
    }
  return count;
}

 // ------------final output generation-------------------//

 function prefixSuffix(prefix,suffix,maxPre,maxSuff){
     let str = "";
     //--------for prefix part addition-----------//
     for(let i = prefix.length-maxPre ; i < prefix.length ; i++ ){
         str = str +""+prefix[i]
     }
   //--------for suffix part addition------//
     for(let i = 0 ; i < maxSuff ; i++ ){
        str = str +""+suffix[i]
    }
   return str;
 }
//---------------- the end ----------------------------//
