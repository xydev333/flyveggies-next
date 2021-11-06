import React, { Component } from 'react';
import Link from 'next/link';

class WishlistModal extends Component {

    state = {
        modal: false
    };

    closeModal = () => {
        this.props.onClick(this.state.modal);
    }

    render() {
        return (
            <div className={`shoppingWishlistModal right ${this.props.active}`}>
                <div className="modal-innter-content">
                    <button type="button" className="close" onClick={this.closeModal}>
                        <span aria-hidden="true">
                            <i className='bx bx-x'></i>
                        </span>
                    </button>

                    <div className="modal-body">
                        <h3>My Wish List (3)</h3>

                        <div className="products-cart-content">
                            <div className="products-cart">
                                <div className="products-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/products/img1.jpg")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="products-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Long Sleeve Leopard T-Shirt</a>
                                        </Link>
                                    </h3>
                                    <span>Blue / XS</span>
                                    <div className="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span className="price">$250.00</span>
                                    </div>

                                    <Link href="#">
                                        <a className="remove-btn">
                                            <i className='bx bx-trash'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="products-cart">
                                <div className="products-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/products/img2.jpg")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="products-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Causal V-Neck Soft Raglan</a>
                                        </Link>
                                    </h3>

                                    <span>Blue / XS</span>
                                    <div className="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span className="price">$200.00</span>
                                    </div>

                                    <Link href="#">
                                        <a className="remove-btn">
                                            <i className='bx bx-trash'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="products-cart">
                                <div className="products-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/products/img3.jpg")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="products-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Hanes Men's Pullover</a>
                                        </Link>
                                    </h3>
                                    <span>Blue / XS</span>

                                    <div className="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span className="price">$200.00</span>
                                    </div>
                                    
                                    <Link href="#">
                                        <a className="remove-btn">
                                            <i className='bx bx-trash'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="products-cart-btn">
                            <Link href="/products-left-sidebar">
                                <a className="optional-btn">Go Shopping!</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WishlistModal;