import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>About The Store</h3>

                                <div className="about-the-store">
                                    <p>One of the Finest dispenaries around.</p>

                                    <ul className="footer-contact-info">
                                        <li>
                                            <i className='bx bx-map'></i> 
                                            Wonder Street, USA, Indiana
                                        </li>
                                        <li>
                                            <i className='bx bx-phone-call'></i> 
                                            317-416-7142
                                        </li>
                                        <li>
                                            <i className='bx bx-envelope'></i> 
                                            questions@flyveggies.com
                                        </li>
                                    </ul>
                                </div>

                                <ul className="social-link">
                                    <li>
                                        <Link href="#">
                                            <a className="d-block" target="_blank">
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="d-block" target="_blank">
                                                <i className='bx bxl-twitter'></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="d-block" target="_blank">
                                                <i className='bx bxl-instagram'></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="d-block" target="_blank">
                                                <i className='bx bxl-linkedin'></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="d-block" target="_blank">
                                                <i className='bx bxl-pinterest-alt'></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget pl-4">
                                <h3>Quick Links</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products-left-sidebar">
                                            <a>Shop Now!</a>
                                        </Link>
                                    </li>
                                   
                                    <li>
                                        <Link href="/faqs">
                                            <a>FAQ's</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/customer-service">
                                            <a>Customer Services</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Customer Support</h3>

                                <ul className="customer-support">
                                    <li>
                                        <Link href="/login">
                                            <a>My Account</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/checkout">
                                            <a>Checkout</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cart">
                                            <a>Cart</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs">
                                            <a>FAQ's</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/track-order">
                                            <a>Order Tracking</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Help & Support</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Newsletter</h3>

                                <div className="footer-newsletter-box">
                                    <p>To get the latest news and latest updates from us.</p>

                                    <form className="newsletter-form">
                                        <label>Your E-mail Address:</label>
                                        <input type="email" className="input-newsletter" placeholder="Enter your email" name="email" required />
                                        <button type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom-area">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>
                                    Copyright <i className='bx bx-copyright'></i>{currentYear} Beyond Web Service <a href="https://beyondwebservice.com" target="_blank">Doug and Angel</a> - All rights reserved.
                                </p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul className="payment-types">
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/visa.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/mastercard.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/mastercard2.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/visa2.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/expresscard.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </footer>
        );
    }
}

export default Footer;