# E-Commerce Project

A responsive e-commerce web application that simulates the core purchasing flow of an online marketplace. This project mimics the functionality and design of Amazon, featuring product browsing, cart management, and a dynamic checkout process.

## 🚀 Live Demo

https://e-commerce-site-8012026.netlify.app/

## 📄 Description

This project is a front-end web application built to demonstrate e-commerce logic and DOM manipulation. It allows users to view a list of products, add them to a shopping cart, and proceed to a checkout page where they can manage their items, select delivery options, and view a real-time payment summary. The application uses **Local Storage** to persist cart data, ensuring that user selections are saved even after refreshing the page.

## ✨ Key Features

* **Product Listing:** Dynamically generates a grid of products with images, ratings, and prices using JavaScript.
* **Shopping Cart System:**
    * Add items to the cart with specific quantities.
    * Cart icon updates in real-time to show the total number of items.
    * Data persistence using `localStorage`.
* **Checkout & Order Summary:**
    * Review items in the cart, including product details and delivery dates.
    * **Update Quantity:** Modify the quantity of items directly in the checkout view.
    * **Delete Items:** Remove items from the cart dynamically.
    * **Delivery Options:** Choose between different shipping speeds (Standard, Express, etc.) which updates the order total instantly.
* **Payment Calculation:** Automatically calculates the cost of items, shipping fees, estimated tax (10%), and the final order total.
* **Responsive Design:** Optimized for various screen sizes, including mobile devices and tablets, using CSS Media Queries.

## 🛠️ Technologies Used

* **HTML5:** Semantic structure for pages like Home, Checkout, Orders, and Tracking.
* **CSS3:** Custom styling with Flexbox and CSS Grid for layouts.
* **JavaScript (ES6+):** Modular architecture using `import`/`export` for better code organization.
* **External Libraries:** `Day.js` for handling date calculations (delivery dates).

## 📂 Project Structure

```text
e-commerce_site/
├── index.html              # Main product listing page
├── checkout.html           # Checkout and payment page
├── orders.html             # Orders history page
├── tracking.html           # Order tracking page
├── backend/
│   └── products.json       # JSON dataset of products
├── data/
│   ├── cart.js             # Logic for managing cart state and local storage
│   ├── products.js         # Product data and helper functions
│   └── deliveryOptions.js  # Shipping option data
├── scripts/
│   ├── amazon.js           # Main script for the product grid
│   ├── checkout.js         # Entry point for checkout logic
│   └── checkout/
│       ├── orderSummary.js # Renders the list of cart items
│       └── paymentSummary.js # Renders the cost breakdown
├── styles/
│   ├── pages/              # Page-specific styles (amazon, checkout, orders, etc.)
│   └── shared/             # Reusable styles (header, buttons, general)
└── images/                 # Product images, icons, and logos
