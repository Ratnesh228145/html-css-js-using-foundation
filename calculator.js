const num1=12;
const num2=13;
const operator="multiply";
switch(operator){
    case "sum":
        console.log(`the sum of given number is: ${num1 + num2}`);
        break;
    case "minus":
        console.log(`the minus of given two number is: ${num1 - num2}`);
        break;
    case "devide":
        console.log(`the divide of given number is: ${num1 - num2}`);
        break;
    case "multiply" :
        console.log(`the multiply of given two number is: ${num1 * num2}`);
        break;
    case  modulas:
        console.log(`the remainder of given number is: ${num1 % num2}`);
        break;
    default :
    console.log("invalid input");
}