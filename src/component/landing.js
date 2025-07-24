import React from 'react';
import { useEffect,useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // 🔗 Context for shared cart
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import './landing.css';

const products = [
  {
    id: 1,
    title: "Rose Bouquet",
    description: "A beautiful bouquet of red roses.",
    price: "15.99",
    img: "https://images.pexels.com/photos/6913841/pexels-photo-6913841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Tulip Vase",
    description: "A lovely vase of mixed color tulips.",
    price: "19.99",
    img: "https://images.pexels.com/photos/11254033/pexels-photo-11254033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Lily Arrangement",
    description: "Elegant white lilies arranged beautifully.",
    price: "25.99",
    img: "https://images.pexels.com/photos/4428629/pexels-photo-4428629.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "Orchid Vase",
    description: "A sophisticated orchid vase for any occasion.",
    price: "35.99",
    img: "https://images.unsplash.com/photo-1666437717535-c0c80440cce5?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Mixed Flower Basket",
    description: "A beautiful basket filled with a variety of flowers.",
    price: "18.50",
    img: "https://plus.unsplash.com/premium_photo-1661340673344-450dbf9f6482?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Carnation Bouquet",
    description: "A fragrant bouquet of colorful carnations.",
    price: "12.99",
    img: "https://images.pexels.com/photos/16147944/pexels-photo-16147944/free-photo-of-flowers-in-vase.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 7,
    title: "Peony Blossom",
    description: "A delicate bouquet of blooming peonies.",
    price: "30.00",
    img: "https://plus.unsplash.com/premium_photo-1661661143945-0da4f9b1d3db?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Daisy Bouquet",
    description: "A fresh and bright daisy bouquet.",
    price: "14.50",
    img: "https://images.pexels.com/photos/10582883/pexels-photo-10582883.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];


const Landing = () => {
    const { addToCart } = useCart();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
  
      return () => unsubscribe();
    }, []);
  
    const handleLogout = async () => {
      try {
        await signOut(auth);
        navigate("/");
      } catch (error) {
        alert(error.message);
      }
    };
  
    const handleAdd = (product) => {
      addToCart({ ...product, quantity: 1 });
      alert(`${product.title} added to cart!`);
    };
  
  return (
    <>
       <header className="header-container">
      <div className="logo">Rosélune</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        {user ? (
          <>
            {/* <span className="user-greeting">Hello, {user.displayName || "Guest"}</span> */}
            <button className="logoutbtn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
    </header>

      <section className="product-section">
        <h2>Explore Our Floral Collection</h2>
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p className="price">₹{product.price}</p>
              <button  onClick={() => handleAdd(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
<button
  onClick={() => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  }}
>
  Logout
</button>


export default Landing;
