function animal(miles) {
    const first =10;
    const secends=50;
    const thard =100;

    if (miles <= 10) {
        const count = miles * first;
        return count;
    }
else if(miles<=20){
    const fistes10 = 10*first;
    const rsttime= miles -10;
    const secend10 = rsttime *secends;
    const total = fistes10 +secend10;
    return total;
}
else{
    const fistes10 = 10*first;
    const secend10 = 10 *secends;
    const restmile =miles -20;
    const restanimal= restmile *thard;

    const totals= fistes10 +secend10 +restanimal;
    return totals;


}
}

const tiger = animal(1);
console.log(tiger);