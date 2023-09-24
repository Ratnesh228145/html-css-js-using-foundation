const calculatediscountpercentage =(originalprice,discountprice) => {
    if(originalprice<=discountprice){
        throw new Error(`discount price should be less than original price`);
    }
    const discount=originalprice-discountprice;
    const discountpercentage=(discount/originalprice)*100;

    //round the discount percentage
    const roundeddiscountpercentage=Math.round(discountpercentage);
    return roundeddiscountpercentage;
};

//example
const originalprice=500;
const discountprice=400;

const discountpercentage=calculatediscountpercentage(originalprice,discountprice);
console.log(`Discount percentage:${discountpercentage}`);