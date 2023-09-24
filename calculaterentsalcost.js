function rentalcost(days, cartype){
    let rentalcost=0;
    
   
    if(cartype=="economy"){
        return rentalcost=4000*days;
       
        
       
    }else if(cartype=="midsize"){
       return rentalcost=10000*days;
       
    }else if(cartype=="luxury"){
       return rentalcost=20000*days;
       
    }else{
        console.log("wrong choice");
    }
    
}

//example
console.log(rentalcost(5,"luxury"));