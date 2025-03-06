window.onload = function() {    
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('product-name').innerHTML = urlParams.get('pid');
}
