import React, { Component } from 'react';
import Link from 'next/link';

class CategoriesTwoGrid extends Component {
    render() {
        return (
            <section className="categories-banner-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src={require("../../images/categories/categories1.jpg")} alt="image" />

                                <div className="content text-white">
                                    <span>Don’t Miss Today</span>
                                    <h3>50% OFF</h3>
                                    <Link href="#">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>

                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src={require("../../images/categories/categories2.jpg")} alt="image" />

                                <div className="content">
                                    <span>New Collection</span>
                                    <h3>Need Now</h3>

                                    <Link href="#">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>
                                
                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src={require("../../images/categories/categories3.jpg")} alt="image" />

                                <div className="content">
                                    <span>Your Looks</span>
                                    <h3>Must Haves</h3>

                                    <Link href="#">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>
                                
                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src={require("../../images/categories/categories4.jpg")} alt="image" />

                                <div className="content text-white">
                                    <span>Take 20% OFF</span>
                                    <h3>Winter Spring!</h3>
                                    
                                    <Link href="#">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>
                                
                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src={require("../../images/categories/categories9.jpg")} alt="image" />

                                <div className="content text-white">
                                    <span>Don’t Miss Today</span>
                                    <h3>Women's</h3>
                                    
                                    <Link href="#">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>
                                
                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <div className="single-categories-box">
                                 <img src={require("../../images/categories/categories10.jpg")} alt="image" />

                                <div className="content">
                                    <span>New Collection</span>
                                    <h3>Men's</h3>
                                    
                                    <Link href="#">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>
                                
                                <Link href="#">
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

export default CategoriesTwoGrid;