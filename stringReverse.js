function stringReverse (str){
    return str.split("").reverse().join("")
 }

// console.log(stringReverse("baliram"))

//2nd way to stringReverse
var stringRev = "Karhala baliram giri"
var string = ""

for(var i =stringRev.split("").length-1; i >=0; i--){
    string += stringRev[i]
}
console.log(string.replace(/i/g," ").split("").reverse().join(""))

function StringReverse(str){
  return str.split(" ").reverse().join(" ")
}



