import React from 'react';
import './Products.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHeart, faShoppingCart, faStar, faStarHalf} from "@fortawesome/free-solid-svg-icons";

const Products = () => {
    return (
        <section className="products" id="Products">
            <h1 className="heading">our <span>products</span></h1>
            <div className="box-container">
                <div className="box">
                    <div className="icons">
                        <a href="#"><FontAwesomeIcon icon={faShoppingCart}/></a>
                        <a href="#"><FontAwesomeIcon  icon={faHeart}/></a>
                        <a href="#"><FontAwesomeIcon icon={faEye}/></a>
                    </div>
                    <div className="image">
                        <img src="images/product-1.png" alt=""/>
                    </div>
                    <div className="content">
                        <h3>fresh coffee</h3>
                        <div className="stars">
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStarHalf}/></i>
                        </div>
                        <div className="price">$15.99 <span>$20.99</span></div>
                    </div>
                </div>
                <div className="box">
                    <div className="icons">
                        <a href="#"><FontAwesomeIcon icon={faShoppingCart}/></a>
                        <a href="#"><FontAwesomeIcon  icon={faHeart}/></a>
                        <a href="#"><FontAwesomeIcon icon={faEye}/></a>
                    </div>
                    <div className="image">
                        <img src="images/product-2.png" alt=""/>
                    </div>
                    <div className="content">
                        <h3>fresh coffee</h3>
                        <div className="stars">
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStarHalf}/></i>
                        </div>
                        <div className="price">$15.99 <span>$20.99</span></div>
                    </div>
                </div>
                <div className="box">
                    <div className="icons">
                        <a href="#"><FontAwesomeIcon icon={faShoppingCart}/></a>
                        <a href="#"><FontAwesomeIcon  icon={faHeart}/></a>
                        <a href="#"><FontAwesomeIcon icon={faEye}/></a>
                    </div>
                    <div className="image">
                        <img src="images/product-3.png" alt=""/>
                    </div>
                    <div className="content">
                        <h3>fresh coffee</h3>
                        <div className="stars">
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStar}/></i>
                            <i><FontAwesomeIcon icon={faStarHalf}/></i>
                        </div>
                        <div className="price">$15.99 <span>$20.99</span></div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Products;