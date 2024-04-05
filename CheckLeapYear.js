function CheckLeapYear(year){
   
    if (typeof year !== 'number') {
        return "Please fill number for the year.";
    }
    let  isLeap = false;
if ((year%4==0 && year%100 !=0) || year%400==0){
isLeap = true
}
return  isLeap ? "The year "+ year +" is leap": "The year "+ year + " is not a leap";
}

console.log(CheckLeapYear(1900))

