//find factors of a given number : 20 : 1,2,4,5,10,20
let n = 20;
for(let i=1;i<=20;i++){
    if (n%i==0) {
        console.log(i);
    }
}
//find factorial of a given number : 5 : 5*2*3*2*1
let n1 = 5;
let res =1;
for(let i=1;i<=n1;i++){
    res=res*i
    console.log(res)
}
//Functions
function findFactorial(n){
let res = 1;
for(let i=1;i<=n;i++){
    res= res*i
    }
    console.log(res);
}
function findOdd(n){
//let n = 10
if (n%2==1) {
    console.log(n+"is an odd number")
}else{
    console.log(n+" is an even number")
}
    
}
findOdd(10)
findOdd(15)
findOdd(20)

findFactorial(5)
findFactorial(10)
