console.log(2>1);
console.log(5<7);
console.log(7<=8);
console.log(5==5);
console.log(5!=7);



/* Different datatype */
console.log("2" > 1);
console.log("03" > 7);
console.log("5" == 5);
console.log(5 === 5);    // true
console.log("5" === 5);  //  false -- check STRICKLY with datatype (===) 

/*AVOID THIS TYPE OF CONVERSION*/
console.log(null < 0);  //false
console.log(null > 0);   //false
console.log(null == 0);  //false
console.log(null >= 0);  // true
console.log(null <= 0); // true
/* undefined always give FALSE value*/
console.log(undefined > 0);
console.log(undefined < 0);

