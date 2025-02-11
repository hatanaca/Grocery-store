let cart = {};

function addToCart(item, price) {
	if (cart[item]) {
		cart[item].quantify += 1;
	} else {
		cart[item] = { price: price, quantify: 1};
	}
	updateCart();
}


