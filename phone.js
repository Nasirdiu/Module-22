const phones=[
    {name : 'smanusng s2',price:25000,camra:10, storage: 128,},
    {name : 'nokia s2',price:2500,camra:110, storage: 1278,},
    {name : 'xamio s2',price:15000,camra:20, storage: 1258,},
    {name : 'SONY M5',price:2000,camra:40, storage: 18,},
    {name : 'htc s2',price:21000,camra:20, storage: 1248,},
    {name : 'oppo s2',price:5000,camra:5, storage: 12,}
];

let chepset = phones[0];
for(const phone of phones){
    //comparie pricce onlye
    if(phone.price<=chepset.price){
        chepset = phone;
    }
    
}
console.log('Lo buget er phone ata ',chepset);