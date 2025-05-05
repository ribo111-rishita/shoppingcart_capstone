import React from "react";
import './cart.css';

const Cart = () => {
  return (
    <>
      <header className="website-header">
        <div className="website-name">
          <h1>Rosélune</h1>
        </div>
        <div className="contact-us">
      <a href="#contact">Contact Us</a>
    </div>
      </header>

       <header>
        <div className='continue-shopping'>
        <img src="/images/arrow.png" alt="arrow" className="arrow-icon" />
        <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
        <img src="/images/cart.png" alt="cart" className="arrow-icon" />
        <p>7</p>
        </div>
       </header>
       <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">you have <span className="total-items-count">7</span> items in the shopping cart</p>
        <div className="cart-items">
          <div className="cart-items-container">
            <div className="items-info">
              <div className="product-img">
              <img src="/images/pexels-teona-swift-6913841.jpg" alt="Rose Bouquet" />
              </div>
              <div className="title">
                <h2>Rose Bouquet</h2>
                <p>A beautiful bouquet of red roses.

                </p>
              </div>
              <div className="add-minus-quantity">
              <i class="fas fa-minus minus"></i>
              <input type='text' placeholder="2"/>
              <i class="fas fa-plus add"></i>
              </div>
            </div>
          </div>
        </div>
       </section>
    </>
  )
}

export default Cart