// Write a JavaScript program to check two given numbers and 
// return true if one of the number is 50 or if their sum is 50
const sumTwo = (x,y) =>{
    if((x===50 || y===50) || (x+y===50)){
      return  true
    }
}
console.log(sumTwo(4,46))