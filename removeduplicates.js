//sample cart
const cart=["item1","item2","item3","item4","item3","item2"];

// Function to remove duplicates from the cart
function removeDuplicates(cart) {
    const uniqueCart = [];
  
    for (const item of cart) {
      if (!uniqueCart.includes(item)) {
        uniqueCart.push(item);
      }
    }
  
    return uniqueCart;
  }
  
  const uniqueCart = removeDuplicates(cart);
  
  console.log("Original cart:", cart);
  console.log("Cart with duplicates removed:", uniqueCart);