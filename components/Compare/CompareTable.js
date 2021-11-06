import React, { Component } from 'react';
import Link from 'next/link';

class CompareTable extends Component {
    render() {
        return (
            <section className="compare-area ptb-100">
                <div className="container">
                    <div className="products-compare-table table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Products</td>
                                    <td>
                                        <div className="remove-btn">
                                            <Link href="#">
                                                <a className="remove">
                                                    <i className='bx bx-trash'></i>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="single-products-box">
                                            <div className="products-image">
                                                <Link href="/products-type-2">
                                                    <a>
                                                        <img src={require("../../images/products/img1.jpg")} className="main-image" alt="image" />
                                                        <img src={require("../../images/products/img-hover1.jpg")} className="hover-image" alt="image" />
                                                    </a>
                                                </Link>
                                            </div>
                
                                            <div className="products-content">
                                                <h3>
                                                    <Link href="/products-type-2">
                                                        <a>Long Sleeve Leopard T-Shirt</a>
                                                    </Link>
                                                </h3>
                                                <div className="price">
                                                    <span className="old-price">$321</span>
                                                    <span className="new-price">$250</span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className='bx bxs-star'></i>
                                                    <i className='bx bxs-star'></i>
                                                    <i className='bx bxs-star'></i>
                                                    <i className='bx bxs-star'></i>
                                                    <i className='bx bxs-star'></i>
                                                </div>

                                                <Link href="#">
                                                    <a className="add-to-cart">Add to Cart</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className="remove-btn">
                                            <Link href="#">
                                                <a className="remove">
                                                    <i className='bx bx-trash'></i>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="single-products-box">
                                            <div className="products-image">
                                                <Link href="/products-type-2">
                                                    <a>
                                                        <img src={require("../../images/products/img2.jpg")} className="main-image" alt="image" />
                                                        <img src={require("../../images/products/img-hover2.jpg")} className="hover-image" alt="image" />
                                                    </a>
                                                </Link>
                                            </div>
                
                                            <div className="products-content">
                                                <h3>
                                                    <Link href="/products-type-2">
                                                        <a>Causal V-Neck Soft Raglan</a>
                                                    </Link>
                                                </h3>
                                                <div className="price">
                                                    <span className="old-price">$210</span>
                                                    <span className="new-price">$200</span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className='bx bxs-star'></i>
                                                    <i className='bx bxs-star'></i>
                                                    <i className='bx bxs-star'></i>
                                                    <i className='bx bxs-star'></i>
                                                    <i className='bx bxs-star'></i>
                                                </div>
                                                
                                                <Link href="#">
                                                    <a className="add-to-cart">Add to Cart</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className="remove-btn">
                                            <Link href="#">
                                                <a className="remove">
                                                    <i className='bx bx-trash'></i>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="single-products-box">
                                            <div className="products-image">
                                                <Link href="/products-type-2">
                                                    <a>
                                                        <img src={require("../../images/products/img3.jpg")} className="main-image" alt="image" />
                                                        <img src={require("../../images/products/img-hover3.jpg")} className="hover-image" alt="image" />
                                                    </a>
                                                </Link>
                                            </div>
                
                                            <div className="products-content">
                                                <h3>
                                                    <Link href="/products-type-2">
                                                        <a>Hanes Top Men's Pullover</a>
                                                    </Link>
                                                </h3>
                                                <div className="price">
                                                    <span className="old-price">$210</span>
                                                    <span className="new-price">$200</span>
                                                </div>
                                                <div className="star-rating">
                                                    <i className='bx bxs-star'></i>
                                                    <i className='bx bxs-star'></i>
                                                    <i className='bx bxs-star'></i>
                                                    <i className='bx bxs-star'></i>
                                                    <i className='bx bxs-star'></i>
                                                </div>
                                                
                                                <Link href="#">
                                                    <a className="add-to-cart">Add to Cart</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Collection</td>
                                    <td>Shirt, New Products, T-Shirt</td>
                                    <td>Shirt, New Products, T-Shirt</td>
                                    <td>Shirt, New Products, T-Shirt</td>
                                </tr>

                                <tr>
                                    <td>Availability</td>
                                    <td>In Stock</td>
                                    <td>In Stock</td>
                                    <td>In Stock</td>
                                </tr>

                                <tr>
                                    <td>Material</td>
                                    <td>100% Polyester</td>
                                    <td>100% Polyester</td>
                                    <td>100% Polyester</td>
                                </tr>

                                <tr>
                                    <td>Vendor</td>
                                    <td>Lacoste</td>
                                    <td>Lacoste</td>
                                    <td>Lacoste</td>
                                </tr>

                                <tr>
                                    <td>SKU</td>
                                    <td>00105сd-1</td>
                                    <td>00105сd-1</td>
                                    <td>00105сd-1</td>
                                </tr>

                                <tr>
                                    <td>Color</td>
                                    <td>White</td>
                                    <td>Black</td>
                                    <td>Blue</td>
                                </tr>

                                <tr>
                                    <td>Size</td>
                                    <td>20</td>
                                    <td>22</td>
                                    <td>XXL</td>
                                </tr>

                                <tr>
                                    <td>Barcode</td>
                                    <td>1234567890</td>
                                    <td>1234567890</td>
                                    <td>1234567890</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}

export default CompareTable;