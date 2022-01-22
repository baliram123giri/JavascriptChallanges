// Write a JavaScript program to compute the absolute difference between a specified number and 19.
//  Returns triple their absolute difference if the specified number is greater than 19.
function difference (x) {
   if(x <= 19){
       return (19-x)
   }else{
       return (x-19)*3
   }
}
console.log(difference(45))