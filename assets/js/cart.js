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
                    location.reload();
                }
                else document.getElementById("product-info").innerHTML = `<p>Product not found.</p>`;
            }
        })
    /*// Retrieve the existing cart from session storage, or initialize an empty array if it doesn't exist
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    // Append the new item to the cart
    cart.push(selectedPerson);

    // Store the updated cart back in session storage
    sessionStorage.setItem('cart', JSON.stringify(cart));*/
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

        /*
        // Retrieve the product array from session storage
        //const person = JSON.parse(sessionStorage.getItem('person'));
        
        // Get the value from the input field
        //const fname = document.getElementById('fname0').value;
        
        // Find the product that matches the input value
        //const selectedPerson = person.find(p => p.pName === fname);
        
        // Add the selected product to the cart
        //addToCart(selectedPerson);

        // Display the product information if found, otherwise show a "Product not found" message
        if (selectedPerson) {
            personInfoDiv.innerHTML = `
                <p>PID: ${selectedPerson.pid}</p>
                <p>Name: ${selectedPerson.pName}</p>
                <p>Price: ${selectedPerson.price}</p>
                <p>Description: ${selectedPerson.description}</p>
                <p>Image: <img src="${selectedPerson.image}" alt="Product Image"></p>
            `;
        } else {
            personInfoDiv.innerHTML = `<p>Product not found.</p>`;
        } */
    }    
}