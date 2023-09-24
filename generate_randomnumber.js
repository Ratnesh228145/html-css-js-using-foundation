const generaterandomnumber=(()=> {

    //generate a random number between 1 to 10
    const randomnumber=Math.floor(Math.random()*100)+1;
    return randomnumber;
})();

console.log("generate a random number:"+generaterandomnumber);