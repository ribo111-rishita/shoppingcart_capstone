import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import './cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, increment, decrement, removeFromCart } = useCart();

  const getTotalItems = () =>
    cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

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
        <div className="continue-shopping" onClick={() => navigate('/landing')}>
          <img src="/images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="/images/cart.png" alt="cart" className="arrow-icon" />
          <p>{getTotalItems()}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">{getTotalItems()}</span> items in your cart.
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            {cartItems.map(item => (
              <div className="items-info" key={item.id}>
                <div className="product-img">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="title">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>

                <div className="add-minus-quantity">
                  <i className="fas fa-minus minus" onClick={() => decrement(item.id)}></i>
                  <input type='text' value={item.quantity} readOnly />
                  <i className="fas fa-plus add" onClick={() => increment(item.id)}></i>
                </div>

                <div className="price">
                  <h3>₹{(item.price * item.quantity).toFixed(2)}</h3>
                </div>

                <div className="remove-item">
                  <i className="fas fa-trash-alt remove" onClick={() => removeFromCart(item.id)}></i>
                </div>
              </div>
            ))}
            <hr />
          </div>

          <div className="checkout-section">
            <p className="cart-total">
              Cart Total: <span>₹{getTotalPrice()}</span>
            </p>
            <button>Checkout</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
