import React from 'react';
import './About.css'

const About = () => {
    return (
        <section className="about" id="About">
            <h1 className="heading"><span>about</span> us </h1>

            <div className="row">
                <div className="image">
                    <img src="images/about-img.jpeg" alt=""/>
                </div>
                <div className="content">
                    <h3>what makes our coffee special!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus eaque ipsa neque
                        officiis sint
                        soluta, vel! Consequatur deserunt quisquam sapiente sequi ullam veritatis! Est et facere placeat
                        quidem
                        voluptatibus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ea, esse ex facere maiores
                        optio qui
                        sint sit ullam vitae.</p>
                    <a href="#" className="btn">learn more</a>
                </div>
            </div>
        </section>
    );
};

export default About;