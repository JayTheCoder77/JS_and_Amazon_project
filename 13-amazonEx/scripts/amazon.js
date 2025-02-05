let productsHtml = '';
products.forEach((product) => {
    productsHtml += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                $${(product.priceCents/100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select class = "js-quantity-${product.id}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart js-added-${product.id}">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button data-product-id = "${product.id}" class="js-add-to-cart add-to-cart-button button-primary">
                Add to Cart
            </button>
        </div>
    `;
});
// console.log(productsHtml);

document.querySelector('.js-products-grid')
.innerHTML = productsHtml;

document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
    button.addEventListener('click',() =>{
        const { productId }= button.dataset;
        const dropDownValue = Number(document.querySelector(`.js-quantity-${productId}`).value);
        let matchingItem;
        
        cart.forEach((item) => {
            if(productId === item.productId){
                matchingItem = item;
            }
        });
        if(matchingItem){
            matchingItem.quantity += dropDownValue;
        }
        else{
        cart.push({
            productId,
            quantity : dropDownValue
        });

        
    }
        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += item.quantity;
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
        const message = document.querySelector(`.js-added-${productId}`);
        message.classList.add('added-to-cart-visible');
        setTimeout(() => {
            clearTimeout();
            message.classList.remove('added-to-cart-visible');
        }, 2000);

        
    });
});


