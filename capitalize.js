function capitalizeName(name) {
    // Check if the first character is lowercase using regular expression
    const isFirstLetterLowercase = /^[a-z]/.test(name);
  
    // Use the ternary operator to capitalize the first letter if needed
    const modifiedName = isFirstLetterLowercase
      ? name.charAt(0).toUpperCase() + name.slice(1)
      : name;
  
    return modifiedName;
  }
  
  // Example usage:
  const userName = "ratnesh tiwari"; // Replace with the user's input
  const capitalizedUserName = capitalizeName(userName);
  console.log(capitalizedUserName); // Output: "John"