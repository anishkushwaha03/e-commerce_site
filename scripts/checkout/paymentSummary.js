import {cart} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';


export function renderPaymentSummary() {
    let productPricePaise = 0 ;
    let shippingPricePaise = 0 ;
    let cartQuantity = 0 ;

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPricePaise += product.pricePaise * cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPricePaise += deliveryOption.pricePaise;

        cartQuantity += cartItem.quantity ;
    });

    const totalBeforeTaxPaise = productPricePaise + shippingPricePaise;
    const taxPaise = totalBeforeTaxPaise * 0.1 ;
    const totalPaise = totalBeforeTaxPaise + taxPaise ;

    const paymentSummaryHTML = `
        <div class="payment-summary-title">
          Order Summary
        </div>

        <div class="payment-summary-row">
          <div>Items (${cartQuantity}):</div>
          <div class="payment-summary-money">₹${(productPricePaise/100).toFixed(2)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div class="payment-summary-money">₹${(shippingPricePaise/100).toFixed(2)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div class="payment-summary-money">₹${(totalBeforeTaxPaise/100).toFixed(2)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div class="payment-summary-money">₹${(taxPaise/100).toFixed(2)}</div>
        </div>

        <div class="payment-summary-row total-row">
          <div>Order total:</div>
          <div class="payment-summary-money">₹${(totalPaise/100).toFixed(2)}</div>
        </div>

        <button class="place-order-button button-primary">
          Place your order
        </button>
    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}