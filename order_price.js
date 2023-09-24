const calculatetotalcost=(cart)=>{
    // initialise the totalcost
    let totalcost=0;
    // iterate the item
    for(const item of cart){
        const itemcost=item.unitprice*item.quantity;
        totalcost+=itemcost;
    
    }
    return totalcost;

};

//example
const cart= [
    {unitprice: 10 , quantity:2},
    {unitprice:25,quantity:4},
    {unitprice:16,quantity:5},
];
const totalcost=calculatetotalcost(cart);
console.log(`total cost of cart is:${totalcost}`);
