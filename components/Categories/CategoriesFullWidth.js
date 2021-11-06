import React, { Component } from 'react';
import Link from 'next/link';

class CategoriesFullWidth extends Component {
    render() {
        return (
            <section className="categories-banner-area pt-100 pb-70">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="categories-box">
                                <img src={require("../../images/categories/categories5.jpg")} alt="image" />

                                <div className="content">
                                    <h3>New Collections!</h3>
                                </div>

                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="categories-box">
                                        <img src={require("../../images/categories/categories6.jpg")} alt="image" />
            
                                        <div className="content">
                                            <h3>Our Popular Products</h3>
                                        </div>

                                        <a href="#" className="link-btn"></a>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="categories-box">
                                        <img src={require("../../images/categories/categories7.jpg")} alt="image" />
            
                                        <div className="content">
                                            <h3>Hot Trending Products</h3>
                                        </div>

                                        <a href="#" className="link-btn"></a>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="categories-box">
                                        <img src={require("../../images/categories/categories8.jpg")} alt="image" />
            
                                        <div className="content">
                                            <h3>Winter Collections!</h3>
                                        </div>

                                        <a href="#" className="link-btn"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CategoriesFullWidth;