
// Write a JavaScript program to compute the sum of the two given
//  integers. If the two values are same, then returns triple their sum.
const sumtriple = (x,y)=>{

   if (x===y){
        return 3 * (x+y)
    }else{
        return (x+y)
}}
console.log(sumtriple(5,5))
console.log(sumtriple(2,10))