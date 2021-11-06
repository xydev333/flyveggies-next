import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <div className="main-banner single-main-banner banner-bg6">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="main-banner-content">
                                        <span className="sub-title">Limited Time Offer!</span>
                                        <h1>Winter-2020!</h1>
                                        <p>Take 20% Off ‘Sale Must-Haves'</p>
                                        <div className="btn-box">
                                            <Link href="/products-left-sidebar">
                                                <a className="default-btn">Shop Women's</a>
                                            </Link>
                                            <Link href="/products-right-sidebar">
                                                <a className="optional-btn">Shop Men's</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;