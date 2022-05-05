import React, {useState} from 'react';
import './Header.css'
import './App.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch, faShoppingCart, faTimes} from "@fortawesome/free-solid-svg-icons";

const Header = () => {

    const [showSearch, setShowSearch] = useState(false)
    const [showCartItems, setShowCartItems] = useState(false)
    const [showMen, setShowMen] = useState(false)

    const handleShow = () => showSearch === true ? setShowSearch(false) : setShowSearch(true)
    const handleDemonstrate = () => showCartItems === true ? setShowCartItems(false) : setShowCartItems(true)
    const showMenu = () => showMen === true ? setShowMen(false) : setShowMen(true)


    return (
        <header className="header">
            <a href="#" className="logo">
                <img src="images/logo.png" alt="#"/>
            </a>

            <nav className={showMen === true ? "navbar active" : "navbar"}>
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Menu">Menu</a>
                <a href="#Products">Products</a>
                <a href="#Review">Review</a>
                <a href="#Contact">Contact</a>
                <a href="#Blogs">Blogs</a>
            </nav>

            <div className="icons" style={{display: "flex"}}>
                <div id="search-btn">
                    <FontAwesomeIcon onClick={handleShow} icon={faSearch}/>
                </div>
                <div>
                    <FontAwesomeIcon onClick={handleDemonstrate} icon={faShoppingCart} id="cart-btn"/>
                </div>
                <div>
                    <FontAwesomeIcon onClick={showMenu} icon={faBars} id="menu-btn"/>
                </div>
            </div>

            <div className={showSearch === true ? "search-form active" : "search-form"}>
                <input type="search" id="search-box" placeholder="Search here..."/>
                <label htmlFor="search-box"><FontAwesomeIcon icon={faSearch}/></label>
            </div>

            <div className={showCartItems === true ? "cart-items-container active" : "cart-items-container"}>
                <div className="cart-item">
                    <span className="fa-times"> <FontAwesomeIcon icon={faTimes}/> </span>
                    <img src="images/cart-item-1.png" alt=""/>
                    <div className="content">
                        <h3>cart item 01</h3>
                        <div className="price">$15.99/-</div>
                    </div>
                </div>
                <div className="cart-item">
                    <span className="fa-times"> <FontAwesomeIcon icon={faTimes}/> </span>
                    <img src="images/cart-item-2.png" alt=""/>
                    <div className="content">
                        <h3>cart item 02</h3>
                        <div className="price">$15.99/-</div>
                    </div>
                </div>
                <div className="cart-item">
                    <span className="fa-times"> <FontAwesomeIcon icon={faTimes}/> </span>
                    <img src="images/cart-item-3.png" alt=""/>
                    <div className="content">
                        <h3>cart item 03</h3>
                        <div className="price">$15.99/-</div>
                    </div>
                </div>
                <div className="cart-item">
                    <span className="fa-times"> <FontAwesomeIcon icon={faTimes}/> </span>
                    <img src="images/cart-item-4.png" alt=""/>
                    <div className="content">
                        <h3>cart item 04</h3>
                        <div className="price">$15.99/-</div>
                    </div>
                </div>
                <a href="#" className="btn">checkout now</a>
            </div>
        </header>
    );
};

export default Header;