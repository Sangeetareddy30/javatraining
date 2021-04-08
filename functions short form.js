//fat arrow function
    let data = [10,20,30];
    data.forEach(function (v) {
    console.log(v);
 });
 //short form for anonymous function
 data.forEach(v=>console.log(v));
 

 //short form for syntax

 function calculator (x,y,act){
     return act (x,y)
 }
 console.log(calculator(2,3,function(a,b){
     return a+b
 }));

     