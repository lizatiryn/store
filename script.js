show(pageNr);
function show(pg) {
  let page = pg;
  store.innerHTML = /*HTML*/ `
	
	<div id='topbar'>
    <span>
      <input type='text' id='search' placeholder = 'Find your product'>
      <button onclick='handleSearch()'>Search</button><div class='search-results'></div>
    </span>
    <img src='whitecart.png' class = 'cart' onclick='openCart()'>
    <img src='menu.png' class = 'menu' onclick="openMenu()">
  </div>
	
	<div id='store'> ${itemDivs(page)}	</div>
	`;
  bottom.innerHTML = /*HTML*/ `	
	<div class = 'bot'><span onclick = 'changePage("1")'>1</span><span onclick = 'changePage("2")'>2</span></div>
	`;
}

function itemDivs(pg) {
  let html = "";

  if (pg == 1) {
    for (let i = 0; i<8; i++) {
      html += /*HTML*/ `<div class='item' onclick = 'openPage("${i}")'> <img src='${
        products[i].src
      }' alt='help' class = 'itemIMG'><div class = 'itemNAME'>${
        products[i].name
      }</div><button class= 'addToCartBTN' onclick = 
    'addToCart("${products[i].src}", "${products[i].name}", "${products[i].price}")'>Add to cart</button><span>${products[i].price}</span></div>
    `;
    }
  }
  else{
    for (let i = 8; i<products.length; i++) {
      html += /*HTML*/ `<div class='item' onclick = 'openPage("${i}")'> <img src='${
        products[i].src
      }' alt='help' class = 'itemIMG'><div class = 'itemNAME'>${
        products[i].name
      }</div><button class= 'addToCartBTN' onclick = 
    'addToCart("${products[i].src}", "${products[i].name}", "${products[i].price}")'>Add to cart</button><span>${products[i].price}</span></div>
    `;
    }
  }
  return html;
}

function openCart() {
  if (!cart) {
    store.innerHTML += /*HTML*/ `
		<div id='cover'></div>
		<div id='cartOpened'>
		<p class = 'close' onclick='closeThis("cart")'>X</p>
		<div id='products'>${drawCartItems()}</div>
		<div id='bottomCart'>Total price: $${totalPrice} <button onclick='payment()'>Proceed to payment</button></div>
		</div>
		`;
    cart = document.getElementById("cartOpened");
    cover = document.getElementById("cover");
  } else {
    document.getElementById("products").innerHTML = `${drawCartItems()}`;
    document.getElementById(
      "bottomCart"
    ).innerHTML = `Total price: $${totalPrice} <button>Proceed to payment</button>`;
  }
}
openMenu()
function openMenu(){

 if(!menu){
   store.innerHTML += /*HTML*/`
     <div id='menuOpened'>
        <p onclick='closeThis("menu")' class = 'close'>Close</p>
        
        <input type='text' id='search' placeholder = 'Find your product'>
        <button onclick='handleSearch()'>Search</button>

        <div class='menu-elements'>Cart</div>
     </div>
   `
   menu = document.getElementById('menuOpened')
 }
}

function addToCart(src, name, price) {
  cartArray.push({
    id: id,
    src: src,
    name: name,
    price: price,
    intPrice: parseInt(price.slice(1)),
  });
  totalPrice += parseInt(price.slice(1));
  id++;
}

function drawCartItems() {
  htmlCart = "";
  for (let cartitems of cartArray) {
    htmlCart += /*HTML*/ `
    <div class='cartElem'>
    <img src='${cartitems.src}'>
    <span>${cartitems.name} - ${cartitems.price}</span>
    <span onclick='deleteFromCart("${cartitems.id}", ${cartitems.intPrice})'>X</span>
  	</div>
    `;
  }
  return htmlCart;
}

function deleteFromCart(itemId, itemPrice) {
  let itemIndex = cartArray.findIndex((item) => item.id === parseInt(itemId));

  if (itemIndex !== -1) {
    cartArray.splice(itemIndex, 1);
    totalPrice -= itemPrice;
  }

  openCart();
}

function closeThis(what) {
  if (what == "cart") {
    cart.remove();
    cover.remove();
    cart = null;
  } else if(what == 'menu'){
    menu.remove();
    menu = null;
  }
}

function handleSearch() {
  const searchValue = document.getElementById("search").value.toLowerCase();

  let resultsHTML = "";

  if (searchValue == "") {
    resultsHTML = "";
    document.querySelector(".search-results").innerHTML = resultsHTML;
    return;
  }

  for (let product of products) {
    if (product.name.toLowerCase().includes(searchValue)) {
      resultsHTML += /*HTML*/ `
        <div class='searchElem' onclick = 'openPage("${products.indexOf(
          product
        )}")'>
          <img src='${product.src}' alt='${product.name}'>
          <span>${product.name} - ${product.price}</span>
        </div>
      `;
    }
  }
  document.querySelector(".search-results").innerHTML = resultsHTML;
}

function changePage(val){
  pageNr = parseInt(val);
  show(pageNr)
  console.log(pageNr);
}