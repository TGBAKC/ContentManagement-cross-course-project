const urlProducts = "https://akca.no/wp-json/wc/store/products/?page=1&per_page=100";

async function fetchProducts() {
    try {
        const response = await fetch(urlProducts);
        if (!response.ok) {
            throw new Error(`API call failed: ${response.status}`);
        }
        const products = await response.json();
        renderProducts(products);
     
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function renderProducts(products) {
    const container = document.getElementById('productContainer');
    container.innerHTML = ''; 
    products.forEach(product => {
        console.log(product);
        if (product.id && product.name && product.images && product.images.length > 0) {
            const productElement = document.createElement('div');
            productElement.className = 'product-thumbnail';
            productElement.innerHTML = `
                <a href="product-detail.html?id=${product.id}">
                    <img src="${product.images[0].src}" alt="${product.images[0].alt || product.name}">
                    <h3>${product.name}</h3>
                   
                </a>
                <div class="description">${product.description}</div>
            `;
            container.appendChild(productElement);
        }
    });

    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', fetchProducts);
