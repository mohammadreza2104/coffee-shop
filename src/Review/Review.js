import React from 'react';
import './Review.css'

const Review = () => {
    return (
        <section className="review" id="Review">
            <h1 className="heading">customers <span>review</span></h1>
            <div className="box-container">
                <div className="box">
                    <img src="images/quote-img.png" alt="" className="quote"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores aut exercitationem
                            impedit iste
                            laborum molestias nihil tenetur. Aut, est!</p>
                        <img className="user" src="images/pic-1.png" alt=""/>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                </div>
                <div className="box">
                    <img src="images/quote-img.png" alt="" className="quote"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores aut exercitationem
                            impedit iste
                            laborum molestias nihil tenetur. Aut, est!</p>
                        <img className="user" src="images/pic-2.png" alt=""/>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                </div>
                <div className="box">
                    <img src="images/quote-img.png" alt="" className="quote"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores aut exercitationem
                            impedit iste
                            laborum molestias nihil tenetur. Aut, est!</p>
                        <img className="user" src="images/pic-3.png" alt=""/>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
