import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadproducts } from '../data/products.js';
import { cart } from '../data/cart.js';
// import '../data/cart-class.js';
import '../data/backend-practice.js';

document.querySelector('.return-to-home-link').innerHTML=`${cart.length} items`

loadproducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
