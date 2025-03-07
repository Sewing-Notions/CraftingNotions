// updates the page with variable info
window.onload = function() {    
    const urlParams = new URLSearchParams(window.location.search);

    if (document.getElementById('product-name') != null) {
    // this will need to be updated to call out to a database and use the returned info to populate the product page
        document.getElementById('product-name').innerHTML = urlParams.get('pid');
    }
    if (document.getElementById('browse-filters') != null) {
    // this will need to be updated to take the urlParams to update the filter selection
        //console.log(urlParams);
        //urlParams.forEach((filter) => console.log(filter));

        if (document.getElementById(urlParams.get('cat')) != null)
            document.getElementById(urlParams.get('cat')).checked = 'true';
        
        //document.getElementById('browse-name').innerHTML = urlParams.get('cat');
    }
}
