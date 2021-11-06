import React, { Component } from 'react';
import Link from 'next/link';
import RelatedProducts from './RelatedProducts';
import ProductImageStyleTwo from './ProductImageStyleTwo';
import ProductsDetailsAccordion from './ProductsDetailsAccordion';
 
class ProductDetailsStyleTwo extends Component {
    render() {
        return (
            <section className="product-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <ProductImageStyleTwo />
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="products-details-desc">
                                <h3>Long Sleeve Leopard T-Shirt</h3>

                                <div className="price">
                                    <span className="new-price">$250.00</span>
                                    <span className="old-price">$321.00</span>
                                </div>

                                <div className="products-review">
                                    <div className="rating">
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                    </div>

                                    <Link href="#">
                                        <a className="rating-count">3 reviews</a>
                                    </Link>
                                </div>

                                <ul className="products-info">
                                    <li>
                                        <span>Vendor:</span> 
                                        <Link href="#">
                                            <a>Lereve</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <span>Availability:</span> 
                                        <Link href="#">
                                            <a>In stock (7 items)</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <span>Products Type:</span> 
                                        <Link href="#">
                                            <a>T-Shirt</a>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="products-color-switch">
                                    <span>Color:</span>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a title="Black" className="color-black"></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a title="White" className="color-white"></a>
                                            </Link>
                                        </li>
                                        
                                        <li className="active">
                                            <Link href="#">
                                                <a title="Green" className="color-green"></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a title="Yellow Green" className="color-yellowgreen"></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a title="Teal" className="color-teal"></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="products-size-wrapper">
                                    <span>Size:</span>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>XS</a>
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link href="#">
                                                <a>S</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>M</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>XL</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>XXL</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="products-info-btn">
                                    <Link href="#">
                                        <a data-toggle="modal" data-target="#sizeGuideModal">
                                            <i className='bx bx-crop'></i> 
                                            Size guide
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a data-toggle="modal" data-target="#productsShippingModal">
                                            <i className='bx bxs-truck'></i> 
                                            Shipping
                                        </a>
                                    </Link>

                                    <Link href="/contact">
                                        <a>
                                            <i className='bx bx-envelope'></i> 
                                            Ask about this products
                                        </a>
                                    </Link>
                                </div>

                                <div className="products-add-to-cart">
                                    <div className="input-counter">
                                        <span className="minus-btn">
                                            <i className='bx bx-minus'></i>
                                        </span>

                                        <input type="text" value="1" />

                                        <span className="plus-btn">
                                            <i className='bx bx-plus'></i>
                                        </span>
                                    </div>

                                    <button type="submit" className="default-btn">
                                        <i className="fas fa-cart-plus"></i> 
                                        Add to Cart
                                    </button>
                                </div>

                                <div className="wishlist-compare-btn">
                                    <Link href="#">
                                        <a className="optional-btn">
                                            <i className='bx bx-heart'></i> 
                                            Add to Wishlist
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a className="optional-btn">
                                            <i className='bx bx-refresh'></i> 
                                            Add to Compare
                                        </a>
                                    </Link>
                                </div>

                                <div className="buy-checkbox-btn">
                                    <div className="item">
                                        <input className="inp-cbx" id="cbx" type="checkbox" />
                                        <label className="cbx" htmlFor="cbx">
                                            <span>
                                                <svg width="12px" height="10px" viewBox="0 0 12 10">
                                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg>
                                            </span>
                                            <span>I agree with the terms and conditions</span>
                                        </label>
                                    </div>

                                    <div className="item">
                                        <Link href="#">
                                            <a className="default-btn">Buy it now!</a>
                                        </Link>
                                    </div>
                                </div>

                                {/* Products Details Accordion */}
                                <ProductsDetailsAccordion />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <RelatedProducts />
            </section>
        );
    }
}

export default ProductDetailsStyleTwo;