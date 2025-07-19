document.addEventListener('DOMContentLoaded', function () {
    const cartBtn = document.getElementById('cart-btn');

    cartBtn.addEventListener('click', () => {
        alert('🛒 Your cart is currently empty!');
        // Optionally, redirect to a cart page
        // window.location.href = 'cart.html';
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const itemName = btn.closest('.cookie-card').querySelector('h3').innerText;
            alert(`${itemName} added to cart ✅`);
        });
    });
});
