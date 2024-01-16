
//  positive and negative number 
let number = prompt("enter your number");

if( number >= 0){
  console.log( "number is postive" );
}else{
  console.log("number is negative");
}

// // vote eligible

   let  age = 8;

   if ( age >= 18 ){
   console.log( "you can vote!");
   }else{
     console.log(" you  cannot vote!");
   }

// //  varible using calculation
  let variable;
   if(typeof variable !== 'undefined'){
    console.log( variable);
   }else{
    console.log("variable is not defined")
   }
 
// // leap year or not

 let year= 2000 ;
  if( (year%4 === 0 && year%100 !== 0 ) || year%400 === 0){
    console.log("leap year")

  }else{
    console.log("not a leap year")

  }

//    largest three number

   let a =12,  b =3, c = 20 ;

    if( (a>b) &&  (a>c)){
        console.log(" a is greater than  ");
    } else  if (b>c && b>a ){
          console.log(" b is greater")
    }else{
          console.log( "c is greater");
    }

// //  person body max index calculation

let weight = 45 , height = 1.75;
 let bmi= weight /(height *height);
if( (bmi < 18)) {
   console.log( "under weight ")
}else  if ((bmi < 24)) {
  console.log( "normal ")

}else  if(bmi < 29){
  console.log("overweight");

} else{
   console.log( " disaeses person")
}

// //  if sring empty
 
let str ="";
 if ( str === ""){
  console.log(" it is true")
 }else{
   console.log(" wrong")
 }

// //   marks score

let marks = 104;

if( marks >= 90  && marks <= 100){
   console.log( " grade A");
} else if( marks >= 75 ){
  console.log( " grade B");
} else if( marks >= 55 ){
  console.log( "grade C ");
} else if( marks >= 40 ){
  console.log( "grade D");
} else if( marks <= 33 ){
  console.log( " grade E fail!");
} else {
   console.log( " enter you marks...");
}



// // passoword
 let pswd = "Taruna";
  if (pswd.length >=8 && /[a-zA-Z]/.test (pswd) && /\d/.test(pswd) && /\W/.test(pswd)){

    console.log( "strong pswd");
 }else{
  console.log( "weak pswd");

 }



// //  even or odd 
let digit = 7;
 if ( digit % 2 === 0){
  console.log( "even")
 }else{
  console.log( "odd");

 }
//  ======================================================= loop ===================================================================
//   for loop  1to 10 no 

for( let i = 1; i<=10 ; i++  ){
   console.log(i);
}

// // 3  multiplication
 let n =  parseInt(prompt("enter your number"));
 for (let i = n; i <= n*10; i +=n){
      console.log(i);
 }


//  4 factorial
let num = 4;
let factorial = 1;
 for( let i =1 ; i <=num ; i++){
     factorial *= i;
 }
 console.log("factorial:", factorial);
 
//    5 Fibonacci series
 let x = 2, y = 1;
for (let i = 1; i <= 10; i++) {
   console.log(x);
   let temp = x + y;
   y = temp;
   x = y;
}

 // 6  sum of squares
 let no = 4;
 let sum =0;
 for( let i =1 ;i <= 4 ; i++) {
   sum+=Math.pow(i,2);
}
console.log(sum);


// 8 average number

 let p = 5;
for (let  k= 1 ; k<=10 ; k++){
    console.log( (a+k)/2);
}

//   sum of numbers 100
let sum1 = 1;
for (let i = 1 ; i<=100 ;i++){
    sum1 += 1;
}
    console.log("sum:", sum1);
    

    //  2. Create a program that iterates over an array and prints each element using a for loop:

 let arr = [ 3,4,6,34,6,4,6]
 for ( let i = 0 ; i <= arr.length ; i++){
     console.log(arr[i]);
 }

// Change this to adjust the size of the  right triangle

  let n1 = 5;
 for (let i = 1; i <= n1; i++) {
     let row = '';
     for (let j = 1; j <= i; j++) {
         row += '* ';
     }
     console.log(row);
 }
