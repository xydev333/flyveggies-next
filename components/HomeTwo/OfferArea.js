import React, { Component } from 'react';
import Link from 'next/link';

class OfferArea extends Component {
    render() {
        return (
            <section className="offer-area bg-image2 ptb-100 jarallax" data-jarallax='{"speed": 0.3}'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 offset-lg-7 offset-md-6">
                            <div className="offer-content-box">
                                <span className="sub-title">Limited Time Offer!</span>
                                <h2>-40% OFF</h2>
                                <p>Get The Best Deals Now</p>
                                <Link href="/products-right-sidebar">
                                    <a className="default-btn">Discover Now</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OfferArea;