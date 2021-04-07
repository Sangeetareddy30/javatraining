// //write a function to return odd numbers between a range

// function getOddNumbersRange(rStart, rEnd) {

//     let oddNumbers=[];
//     for(let r = rStart;r<=rEnd;r++){
//         if (r%2==1) {
//             oddNumbers.push(r);
//             // console.log(r);            
//         }
//     }
//     return oddNumbers;
// }

// let res = getOddNumbersRange(10,50);
// console.log(res);

//demoAdd
function demoAdd (a,b){
    return a+b
}
let res = demoAdd(2,3)
console.log(res);
console.log(demoAdd(20,30))

function demoAddAll (n){
    let out = 0;
    for(let i=0;i<n.length;i++){
            out=out+n[i];
        }   return out;
    }

let arr=[10,20,30,40,50];
console.log(demoAddAll(arr));

function demoAddAll2(...n){ //rest parameter accepts any number of values
    let out = 0;
    for(let i=0;i<n.length;i++){
            out=out+n[i];
        }   return out;
    }
    console.log(demoAddAll2(2,3,4,5,6));
    console.log(demoAddAll2(...arr)) //spread parameter