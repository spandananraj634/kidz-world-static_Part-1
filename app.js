var cart = [];
var total = 0;
var quantity = 0;

document.getElementById("cart").addEventListener("click", () => {
  cart.forEach(function (item) {
    console.log(`Item name: ${item.name} - Quantity: ${item.quantity}`);
    total += item.price * item.quantity;
  });
  printTotal(total);
});

function render(cart) {
  var cart = document.getElementById("cart-value");
  cart.innerText = quantity;
}

const btn_cart = document.getElementsByClassName("addToCart");

for (let i = 0; i < btn_cart.length; i++) {
  btn_cart[i].addEventListener("click", () => {
    addToCart(btn_cart[i]);
  });
}

btn_cart.forEach((element)=>{
  element.addEventListener("click",()=>{
    console.log(element)
  })
})

function addToCart(target) {
  // getting the grand parent element
  var closest = target.closest("div[id]");
  var id = closest.id;
  var element = document.getElementById(id);
  var Name_html = document.querySelector(`#${element.id} div h3`);
  var price_html = document.querySelector(`#${element.id} .buy p`);
  var Name = Name_html.innerText;
  var price_$ = price_html.innerText;
  var price = parseFloat(price_$.replace("$", ""));
  quantity += 1;
  //   checking whether the name of the product is already in the cart
  var index = cart.findIndex(function (cartItem) {
    return cartItem.name.indexOf(Name) > -1;
  });
  if (index === -1) {
    // If not adding new items
    var tempcart = { name: Name, price: price, quantity: 1 };
    cart.push(tempcart);
  } else {
    // if it is already just add the quantity to the cart
    cart[index].quantity++;
  }
  render(cart);
}

function printTotal(total) {
  var doller = Math.floor(total);
  var cent = Math.floor((total - doller) * 100);
  console.log(`the total amount is ${doller}$ and ${cent} cents`);
}