var today = new Date()
var cms = new Date(today.getFullYear(), 11, 25)
if(today.getMonth()===11 && today.getDay()>25){
    cms.setFullYear(cms.getFullYear()+1)
}
var one_day = 1000*60*60*24
console.log(Math.ceil((cms.getTime()-today.getTime()))/(one_day))