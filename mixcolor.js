function mixColors( color1,color2){
    switch(true){
        case (color1 === "red" && color2==="blue") || (color1==="blue" && color2==="red"):
            console.log("purple");
            break;
        case(color1 === "red" && color2==="yellow") || (color1==="yellow" && color2==="red") :
             console.log("orange");
             break;
        case(color1 === "blue" && color2==="yellow") || (color1==="yellow" && color2==="blue"):
             console.log("green");
             break;
         default:
            console.log("invalid color combition");          
    }
}

// Example usage:
mixColors("red", "blue");    // Output: Purple
mixColors("yellow", "red"); // Output: Orange
mixColors("blue", "green");  // Output: Invalid color combination