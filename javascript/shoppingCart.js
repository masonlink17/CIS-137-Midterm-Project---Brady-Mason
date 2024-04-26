let cart = [];
let total = 0;
    
function addToCart(name, artist, image, price) {
    let product = {
        name: name,
        artist: artist,
        image: image,
        price: price
    };
    cart.push(product);
    total += price;
    updateCart();
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    let cartItemsElement = document.getElementById('cartItems');
    let cartTotalElement = document.getElementById('cartTotal');
    cartItemsElement.innerHTML = '';
    cart.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = `${item.name} by ${item.artist} - $${item.price}`;
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.id = `removeButton${index}`;
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartItemsElement.appendChild(li);
    });
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function loadProducts() {
    fetch('../json/products.json')
        .then(response => response.json())
        .then(data => {
            data.products.forEach(product => addToCart(product.name, product.artist, product.image, product.price));
        })
        .catch(error => console.error('Error loading products:', error)); //exception handling go brrrrrrrrrrrr
}