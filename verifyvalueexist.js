let states = ["ts", "ap", "ka", "dl", "mh"];
//write a function to verify a value exist in an array

console.log(isValueExist(states, "dl"));
console.log(isValueExist(states, "kl"));
console.log(isValueExist(states, "ts"));

function isValueExist(lstData, exp) {

    let isValueFound = false; //flagging
    for (let i = 0; i < lstData.length; i++) {
        if (lstData[i] == exp) {
            isValueFound = true;
            break; //exit from loop
        }
    }
    return isValueFound;
}

function isValueExist1(lstData, exp) {

    for (let i = 0; i < lstData.length; i++) {
        if (lstData[i] == exp) {
            return true;
        }
    }
    return false;
}