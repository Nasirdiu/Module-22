function multipleAdd(num1,num2,num3){
    const cwood=3;
    const twood=10;
    const bwod=50;
    // multiple add
    const char = cwood *num1;
    const table = twood *num2;
    const bed  = bwod *num3;
    const total = char+table+bed;
    return total;
}

const pluse=multipleAdd(1,1,1);
console.log(pluse);
