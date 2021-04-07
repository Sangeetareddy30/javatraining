//reverse string
//9999 : 2000*4, 500*3, 200*2, 50*1, 20*2, 5*1, 2*2
let den = [2000,500,200,100,50,20,10,5,2,1]
let amount = 9999

// let r = amount / den[0]
// console.log(amount % den[0])
// amount = amount % den[0]
// console.log(amount);

for(let d = 0;d<den.length;d++){
    let res = parseInt (amount / den[d]);
    console.log(res+"*"+den[d]);
    amount = amount % den[d];
}

//find odd numbers between a range

for (let x = 10; x <= 50; x++){
    if (x % 2 ==1)
    console.log(x + " is odd number");
}
