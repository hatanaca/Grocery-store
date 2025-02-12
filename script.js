let cart = {};

function addToCart(item, price) {
	if (cart[item]) {
		cart[item].quantify += 1;
	} else {
		cart[item] = { price: price, quantify: 1};
	}
	updateCart();
}
	function updateCart() {
		let cartItemsDiv = document.getElementById('cart-items');
		cartItemsDiv.innerHTML = '';
		let total = 0;

		for (let item in cart) {
			let itemTotal = cart[item].price * cart[item].quantify;
			total += itemTotal;
			cartItemsDiv.innerHTML += `
			<div class='cart-item">
			<span>${item} (x${cart[item].quantify}) - $${itemTotal.toFixed(2)}</span>
			<button onclick="removeFromCart('${item}')">Remove</button>
			</div>`;
		}
		document.getElementById('total').innerText = total.toFixed(2);
	}

	function removeFromCart(item) {
		if (cart[item]) {
			cart[item].quantify -= 1;
			if (cart[item].quantify === 0) {
				delete cart[item];
			}
		}
		updateCart();
	}


