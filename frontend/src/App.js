import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import './App.css';
import { FaDragon, FaCartPlus, FaTwitter, FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <BrowserRouter>
      <div className="grid-container">

        <header className="header">

          <div className="header-logo-shopname-search">
            <div className="shop-name">
              <Link to="/" className="shop-name-top">JDShoes</Link>
            </div>
            <div className="shop-logo">
              <FaDragon />
            </div>
            <div className="header-search">
              <input placeholder="Search ..."></input>
            </div>
          </div>
          <div className="header-category">
            <a href="Men.html">Men</a>
            <a href="Women.html">Women</a>
            <a href="Sale.html">Sale</a>
            <a href="Allproduct.html">All Product</a>
          </div>
          <div className="header-cart-signin">
            <a href="/cart/:id?">
              <FaCartPlus className="header-cart" />
            </a>
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                <Link to="/signin">
                  <button className="button-signin header-signin">Sign in</button>
                </Link>
            }
          </div>
        </header>

        <main className="main">
          <div className="content">
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
          </div>
        </main>

        <footer className="footer">
          <div className="footer-left">
            <FaTwitter />
            <FaInstagramSquare />
            <FaFacebookSquare />
          </div>
          <div className="footer-mid">
            <div>
              <Link to="/" className="shop-name-bottom">JDShoes</Link>
            </div>
            <div>
              <FaDragon />
            </div>
          </div>
          <div className="footer-right">
            <div className="location">
              <div>VIETNAM</div>
              <GoLocation />
            </div>
            <div className="footer-right-home-contact-about">
              <p>Home|</p>
              <p>Contact|</p>
              <p>About</p>
            </div>
          </div>

        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
