let data = [10,20,30];
data.forEach(function (v) {
    console.log(v);
});

//short form for anonymous function
data.forEach(v=>console.log(v));
data.forEach((v)=>console.log(v));

//short form for syntax

// anonymous function short form :  ()=>{}
// () is optional if function having single parameter
// {} is optional if function having single line
// if {} not used then that single line become return value

// this form is called lambda expression
// this is to simplify creating of the function which contains single line

function calculator(x,y,act) {
    return act(x,y)
}

console.log(calculator(2,3,function(a,b){
    return a+b
    }));

console.log(calculator(20,30,(a,b)=>{return a+b}));
console.log(calculator(20,30,(a,b)=>a+b));
console.log(calculator(20,30,(a,b)=>a*b));
console.log(calculator(20,30,(a,b)=>a/b));