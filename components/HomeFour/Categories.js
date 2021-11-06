import React, { Component } from 'react';
import Link from 'next/link';

class Categories extends Component {
    render() {
        return (
            <section className="categories-banner-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src={require('../../images/categories/categories1.jpg')} alt="image" />

                                <div className="content text-white">
                                    <span>Don’t Miss Today</span>
                                    <h3>50% OFF</h3>
                                    <Link href="/products-left-sidebar">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>
                                <Link href="/products-left-sidebar">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src={require('../../images/categories/categories2.jpg')} alt="image" />

                                <div className="content">
                                    <span>New Collection</span>
                                    <h3>Need Now</h3>
                                    <Link href="/products-left-sidebar">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>
                                <Link href="/products-left-sidebar">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Categories;