function correctbug(cart){
    const correctedcart=[];
    for(let i=0;i<cart.length;i++){
        const item=cart[i];
        const correcteditem={...item,quantity:item.quantity*2};
        correctedcart.push(correcteditem);
        }
        return correctedcart;
}

//example
const cart=[
    {item:"product A", quantity:3},
    {item:'product B',quantity:4},
    {item:'product D',quantity:2},

];
correctedcart=correctbug(cart);
console.log(correctedcart);