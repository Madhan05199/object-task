//3.Get current month from the user and find(winter, fall, summer) 
let months=["jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"]
let date=new Date();
let user=parseInt(prompt("Enter the number from 1 to 12"))
date.setMonth(user-1)
let currentmonth=date.getMonth();
let thismonth=months[currentmonth];
console.log(thismonth);

if(currentmonth >=11 || currentmonth <=1){

    console.log("This is Winter season")
}else if(currentmonth >=2 && currentmonth <=4){

    console.log("This is Summer season")
}else if(currentmonth >=5 && currentmonth <=7){

    console.log("This is Monsoon season")
}else if(currentmonth >=8 && currentmonth <=10){
    console.log("This is Fall season")
}