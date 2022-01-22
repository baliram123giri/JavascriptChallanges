//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

var side1 = 5
var slide2 = 6
var slide3 = 7

const s = (side1+slide2+slide3)/2
const area = Math.sqrt(s*(s-side1)*(s-slide2)*(s-slide3))
console.log(area)
14.696938456699069