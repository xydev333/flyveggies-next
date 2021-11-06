import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import OfferStyleOne from '../components/Common/OfferStyleOne';
import Partner from '../components/Common/Partner';
import Testimonials from '../components/Common/Testimonials';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

class About extends Component {
    render() {
        return (
            <React.Fragment>
               <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="About Us" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="About Us" 
                /> 

                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <img src={require("../images/about/about1.jpg")} className="shadow" alt="image" />
                                    <img src={require("../images/about/about2.jpg")} className="shadow" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <span className="sub-title">About Us</span>
                                    <h2>Linava Trusted Online Shopping Site in the World</h2>
                                    <h6>Linava.com offers you flexible and responsive shopping experience.</h6>
                                    <p><strong>Linava</strong> is an eCommerce website which features millions of products, i.e. clothes, shoes, bags, electronic items and much more, with all at incredible prices.</p>
                                    <p>One of the most popular on the web is shopping. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                    <div className="features-text">
                                        <h5>
                                            <i className='bx bx-planet'></i> 
                                            Ships to more than 10 countries and regions
                                        </h5>
                                        <p>We provide customers with a hassle-free and worry-free international shopping experience from buying to delivery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-inner-area">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="about-text">
                                        <h3>Our Story</h3>
                                        <p>One of the most popular on the web is shopping.</p>
                                        
                                        <ul className="features-list">
                                            <li><i className='bx bx-check'></i> People like Livani</li>
                                            <li><i className='bx bx-check'></i> World's finest Livani</li>
                                            <li><i className='bx bx-check'></i> The original Livani</li>
                                            <li><i className='bx bx-check'></i> We trust Livani</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6">
                                    <div className="about-text">
                                        <h3>Our Values</h3>
                                        <p>The best of both worlds. Store and web.</p>
                                        
                                        <ul className="features-list">
                                            <li><i className='bx bx-check'></i> Always in style!</li>
                                            <li><i className='bx bx-check'></i> Discover your favorite shopping</li>
                                            <li><i className='bx bx-check'></i> Find yourself</li>
                                            <li><i className='bx bx-check'></i> Feel-good shopping</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                                    <div className="about-text">
                                        <h3>Our Promise</h3>
                                        <p>Rediscover a great shopping tradition</p>
                                        
                                        <ul className="features-list">
                                            <li><i className='bx bx-check'></i> Get better shopping</li>
                                            <li><i className='bx bx-check'></i> Love shopping again</li>
                                            <li><i className='bx bx-check'></i> Online shopping.</li>
                                            <li><i className='bx bx-check'></i> Shopping for all seasons</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <OfferStyleOne />
                <Partner /> 
                <Testimonials />
                <FacilitySlider />
                <InstagramFeed />
                <Footer />
            </React.Fragment>
        );
    }
}

export default About;