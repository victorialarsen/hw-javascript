const cart = [
    {name: "Sushi", price: 20, quantity: 4},
    {name: "Burger Max", price: 30, quantity: 1},
    ]

function checkout (cart) {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (total > 100) {
      total *= 0.9; 
    }
  
    return total;
  }
   
console.log(checkout (cart));  