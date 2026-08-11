///**** date *****//

let todaydate = new Date()
console.log(todaydate.toString());    //indian std time : wed aug 12 2026  00:23:09
console.log(todaydate.toISOString());  //2026-08-11t18:53:09.394z
console.log(todaydate.toDateString());   // wed aug 12 2026
console.log(todaydate.toLocaleString());  // 8/12/2026, 12:23:09 AM

//month is start at 0 in js     e.g 0-jan, 1-feb

let myDate = new Date(2026, 1,23)
console.log(myDate.toDateString());   //mon feb 23 2026
let my1Date = new Date(2026, 0,23,12,13,6)
console.log(my1Date.toLocaleString());   // 1/23/2026, 12:13:06 PM

//when write in formate mm/dd/yy  it month start at 1

let my2date = new Date("02-23-2026")  //only follw the mm/dd/yy 
console.log(my2date.toDateString());  // mon feb 23 2026
console.log(my2date.getMonth());    //start at 0- jan
console.log(my2date.getDay());     //start at 0-sun
console.log(my2date.getMonth() + 1);  //it start at 1-jan


// newDate.toLocaleString('default',{
//     weekday: "long",
// })


//***** Time *****/
let mytime = Date.now()
console.log(mytime);
console.log(my2date.getTime());   //give time in milisec
