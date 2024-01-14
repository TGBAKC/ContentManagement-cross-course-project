const urlBase = "https://akca.no/wp-json/wc/store/products/";
const productDetailsContainer = document.getElementById('productDetails');

function fetchAndDisplayProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        fetch(`${urlBase}${productId}`)
            .then(response => response.json())
            .then(product => {
               renderProduct(product);
            })
            .catch(error => {
                productDetailsContainer.innerHTML = `<p>Error loading product details.</p>`;
                console.error('Error fetching product details:', error);
            });
    } else {
        productDetailsContainer.innerHTML = `<p>Product ID not specified.</p>`;
    }
}

function renderProduct(product) {
    productDetailsContainer.innerHTML = `
                <h1>${product.name}</h1>
                <img src="${product.images[0].src}" alt="${product.name}">
                <p>${product.description}</p>
                <p>Rating: ${product.short_description.replace(/<[^>]*>/g, '')}</p>
                <p>Price: <del>${product.prices.regular_price} ${product.prices.currency_symbol}</del> ${product.prices.sale_price} ${product.prices.currency_symbol}</p>
                <p>Categories: ${product.categories.map(c => c.name).join(', ')}</p>
                <p>Tags: ${product.tags.map(t => t.name).join(', ')}</p>
                <!-- Add any additional details here -->
            `
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', fetchAndDisplayProductDetails);

