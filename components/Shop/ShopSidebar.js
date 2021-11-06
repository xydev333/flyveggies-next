import React, { Component } from 'react';
import Link from 'next/link';

class ShopSidebar extends Component {
    render() {
        return (
            <div className="woocommerce-widget-area">
                <div className="woocommerce-widget filter-list-widget">
                    <h3 className="woocommerce-widget-title">Current Selection</h3>

                    <div className="selected-filters-wrap-list">
                        <ul>
                            <li>
                                <Link href="#">
                                    <a><i className='bx bx-x'></i> 44</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><i className='bx bx-x'></i> XI</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><i className='bx bx-x'></i> Clothing</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a><i className='bx bx-x'></i> Shoes</a>
                                </Link>
                            </li>
                        </ul>

                        <Link href="#">
                            <a className="delete-selected-filters">
                                <i className='bx bx-trash'></i> 
                                <span>Clear All</span>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="woocommerce-widget collections-list-widget">
                    <h3 className="woocommerce-widget-title">Collections</h3>

                    <ul className="collections-list-row">
                        <li>
                            <Link href="#">
                                <a>Men's</a>
                            </Link>
                        </li>
                        <li className="active">
                            <Link href="#">
                                <a className="active">Women’s</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Clothing</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Shoes</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Accessories</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Uncategorized</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="woocommerce-widget price-list-widget">
                    <h3 className="woocommerce-widget-title">Price</h3>

                    <div className="collection-filter-by-price">
                        <input className="js-range-of-price" type="text" data-min="0" data-max="1055" name="filter_by_price" data-step="10" />
                    </div>
                </div>

                <div className="woocommerce-widget size-list-widget">
                    <h3 className="woocommerce-widget-title">Size</h3>

                    <ul className="size-list-row">
                        <li>
                            <Link href="#">
                                <a>20</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>24</a>
                            </Link>
                        </li>
                        <li className="active">
                            <Link href="#">
                                <a>30</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>36</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>XS</a>
                            </Link>
                        </li>
                        <li>
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
                                <a>L</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>XL</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="woocommerce-widget color-list-widget">
                    <h3 className="woocommerce-widget-title">Color</h3>

                    <ul className="color-list-row">
                        <li className="active">
                            <Link href="#">
                                <a title="Black" className="color-black"></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a title="Red" className="color-red"></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a title="Yellow" className="color-yellow"></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a title="White" className="color-white"></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a title="Blue" className="color-blue"></a>
                            </Link>
                        </li>
                        <li>
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
                                <a title="Pink" className="color-pink"></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a title="Violet" className="color-violet"></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a title="Blue Violet" className="color-blueviolet"></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a title="Lime" className="color-lime"></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a title="Plum" className="color-plum"></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a title="Teal" className="color-teal"></a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="woocommerce-widget brands-list-widget">
                    <h3 className="woocommerce-widget-title">Brands</h3>

                    <ul className="brands-list-row">
                        <li>
                            <Link href="#">
                                <a>Gucci</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Virgil Abloh</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Balenciaga</a>
                            </Link>
                        </li>
                        <li className="active">
                            <Link href="#">
                                <a>Moncler</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Fendi</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Versace</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="woocommerce-widget aside-trending-widget">
                    <div className="aside-trending-products">
                        <img src={require("../../images/offer-bg.jpg")} alt="image" />

                        <div className="category">
                            <h3>Top Trending</h3>
                            <span>Spring/Summer 2020 Collection</span>
                        </div>

                        <Link href="#">
                            <a className="link-btn"></a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopSidebar;