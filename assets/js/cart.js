
// Get the json of products

// Store the product array in session storage
const personInfoDiv = document.getElementById("person-info");
const productInput = document.getElementById("fname0");

// Function to add a selected product to the cart
function addToCart() {
    fetch('../json/products.json')
        .then(response => response.json())
        .then(products => {
            if (productInput != null) {
                let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
                var selectedProduct = products.find(p => p.pName === productInput.value);
                if (selectedProduct != undefined) {
                    cart.push(selectedProduct);
                    sessionStorage.setItem('cart', JSON.stringify(cart));
                    //location.reload();
                    console.log("added to cart");
                }
                else document.getElementById("product-info").innerHTML = `<p>Product not found.</p>`;
            }
        })
}
function quickAddToCart(productId) {
    fetch('../json/products.json')
        .then(response => response.json())
        .then(products => {
            let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            var selectedProduct = products.find(p => p.pid == productId);
            console.log(selectedProduct);
            if (selectedProduct != undefined) {
                cart.push(selectedProduct);
                sessionStorage.setItem('cart', JSON.stringify(cart));
                console.log("added to cart");
            }
        })
}

// Function to display the selected product information
function displayCart() {
    if (personInfoDiv != null) {
        const cartContent = JSON.parse(sessionStorage.getItem('cart'));
        personInfoDiv.innerHTML = ``;

        cartContent.forEach(item => {
            if (item != null) {
                personInfoDiv.innerHTML += `
                <div class="product-card">
                    <p>Name: ${item.pName}</p>
                    <p>Price: ${item.price}</p>
                    <p>Description: ${item.description}</p>
                    <img src="${item.image}" alt="Product Image">
                    <p>PID: ${item.pid}</p>
                </div>
                `
            }
        });
    }    
}