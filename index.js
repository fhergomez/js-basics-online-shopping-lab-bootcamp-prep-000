let cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  const itemPrice = Math.floor(Math.random()*100) + 1;
  cart.push({[itemName]:itemPrice});
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }

  let itemsAndPrices = [];
  for (let i = 0;i < cart.length;i++) {
    let itemsAndPrice = cart[i];
    let item = Object.keys(itemsAndPrice)[0];
    let price = itemsAndPrice[item];
    itemsAndPrices.push(`${item} at \$${price}`);
  }
  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
    break;
    default:
    itemsAndPrices[cart.length-1] = "and ".concat(itemsAndPrices[cart.length-1]);
    itemsAndPrices = itemsAndPrices.join(", ");
  }
  console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
