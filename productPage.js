function openPage(index){
	let object = products[index]
	store.innerHTML = /*HTML*/ `
	
	<div id='topbar'><span id='back' onclick='show(pageNr)'><=</span><span><input type='text' onchange='this.value' placeholder = 'Find your product'><button>Search</button></span><img src='whitecart.png' onclick='openCart()'></div>

	<div class='info'><img src='${object.src}'><span>${object.name}</span><span>${object.price}</span></div>
	<div class='description'>${object.description}</div>
	<button class= 'addToCartBTN openpagebtn' onclick = 'addToCart("${object.src}", "${object.name}", "${object.price}")'>Add to cart</button>
	`;
	bottom.innerHTML = ''
}

function payment(){
	store.innerHTML = /*HTML*/ `
	
	<h1>This website is trying to steal your information. Be careful.</h1>
	`;
	bottom.innerHTML = ''
}