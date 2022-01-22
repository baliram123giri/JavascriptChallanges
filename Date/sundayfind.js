

// for(var year = 2022; year <=2050; year++){
//     const date = new Date(year, 0,1)
//    if(date.getDay()===6){
//        console.log("1st January is being Sunday "+ year)
//    }
// }
// const date = new Date(year, 0,4)
// console.log(date)
// for(var year = 2022; year<=2055; year++){
//     if(new Date(year,0,1).getDay()===0){
//         console.log("The Sunday is being in this years:" + year )
//     }
// }

for (var year = 2022; year <= 2060; year++){
    if(new Date().getDay()===0){
        console.log("Sunday is being a : "+ year)
    }
}