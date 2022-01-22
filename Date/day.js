const today = new Date()

const days = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

const day = today.getDay()

// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const todayIs = days[day]

//now let's get the current time

var hour = today.getHours()
var minute = today.getMinutes()
var seconds = today.getSeconds()

hour = hour<10? "0"+hour:hour
minute = minute<10? "0"+minute:minute
seconds = seconds<10? "0"+seconds:seconds

//let's do the condition
const peridiam = hour >= 12?"PM":"AM"
hour = hour>=12?hour-12 : hour

console.log("Today is: " + todayIs)
console.log("Current Time is: "+hour+ ":" +minute+":" +seconds+ " Date " + today.getUTCDate()+"/"+today.getMonth()+1+"/"+today.getFullYear())
