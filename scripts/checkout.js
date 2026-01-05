import { cart, removeFromCart, updateDeliveryOption } from '../data/cart.js';
import { products } from '../data/products.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { deliveryOptions } from '../data/deliveryOptions.js'

// console.log(dayjs());

function renderOrderSummary() {
    let cartSummaryHTML = ''; //summary of the items in the cart

    cart.forEach((cartItem) => {
        //console.log(cartItem);

        const productId = cartItem.productId;

        let matchingProduct = products.find((product) => {
            return product.id === productId;
        });

        const deliveryOptionId = cartItem.deliveryOptionId;

        let deliveryOption = deliveryOptions.find((option) => {
            return option.id === deliveryOptionId;
        });

        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
        const dateString = deliveryDate.format('dddd, MMMM D');

        //console.log(matchingProduct);

        cartSummaryHTML +=
            `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
            Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${matchingProduct.image}">

            <div class="cart-item-details">
            <div class="product-name">
                ${matchingProduct.name}
            </div>
            <div class="product-price">
                ₹${(matchingProduct.pricePaise / 100).toFixed(2)}
            </div>
            <div class="product-quantity">
                <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                Update
                </span>
                <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
                </span>
            </div>
            </div>

            <div class="delivery-options">
            <div class="delivery-options-title">
                Choose a delivery option:
            </div>
                ${deliveryOptionsHTML(matchingProduct, cartItem)}
            </div>
        </div>
    </div>
    `;
    });

    function deliveryOptionsHTML(matchingProduct, cartItem) {

        let html = '';

        deliveryOptions.forEach((deliveryOption) => {
            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');

            const dateString = deliveryDate.format('dddd, MMMM D');

            const priceString = deliveryOption.pricePaise === 0
                ? 'FREE'
                : `₹${(deliveryOption.pricePaise / 100).toFixed(2)} -`;

            const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

            html += `
        <div class="delivery-option js-delivery-option"
        data-product-id="${matchingProduct.id}"
        data-delivery-option-id="${deliveryOption.id}">
            <input type="radio"
            ${isChecked ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
            <div>
            <div class="delivery-option-date">
                ${dateString}
            </div>
            <div class="delivery-option-price">
                ${priceString} Shipping
            </div>
            </div>
        </div>
        `;
        });
        return html;
    }

    const orderSummaryElement = document.querySelector('.js-order-summary');

    orderSummaryElement.innerHTML = cartSummaryHTML;

    const deleteLinks = document.querySelectorAll('.js-delete-link');

    deleteLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            removeFromCart(productId);
            console.log(cart);

            const container = document.querySelector(`.js-cart-item-container-${productId}`);

            container.remove();
        });
    });

    const deliveryOptionRadio = document.querySelectorAll('.js-delivery-option');

    deliveryOptionRadio.forEach((element) => {
        element.addEventListener('click', () => {
            const { productId, deliveryOptionId } = element.dataset;
            updateDeliveryOption(productId, deliveryOptionId);
            renderOrderSummary();
        });
    });
}

renderOrderSummary();


