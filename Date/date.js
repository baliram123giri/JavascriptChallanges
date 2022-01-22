
// Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const date = new Date()
var dd = date.getDate()
var mm = date.getMonth()+1
var year = date.getFullYear()
dd= dd<10?"0"+dd:dd
mm= mm<10?"0"+mm:mm
console.log(mm+"-"+dd+"-"+year,mm+"/"+dd+"/"+year)