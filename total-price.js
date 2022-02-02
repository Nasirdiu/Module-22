const products=[
    {name:'laptop',price:40000},
    {name:'shart',price:500},
    {name:'watch',price:200},
    {name:'phone',price:20000},
];

let totalPrice =0;
for (const product of products){
    totalPrice = totalPrice +product.price;
}
// console.log(totalPrice);

const cart=[
    {name:'laptop',price:10,quenty:1},
    {name:'shart',price:10,quenty:1},
    {name:'watch',price:10,quenty:10},
    {name:'phone',price:10,quenty:1},
];

let carTotal=0;
for(const product of cart){
    // console.log(product);
    const productTotal=product.price*product.quenty;
    carTotal = carTotal+productTotal;

}
console.log(carTotal);