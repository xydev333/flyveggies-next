import React, { Component } from 'react';
import Link from 'next/link';

class ViewProductModal extends Component {

    state = {
        modal: false
    };

    closeModal = () => {
        this.props.onClick(this.state.modal);
    }

    render() {
        let {product} = this.props;
        console.log(product)
        return (
            <React.Fragment>
                <div className={`admin-product-modal view-product ${this.props.active}`}> 
                    <div className="modal-innter-content">
                        <button type="button" className="close" onClick={this.closeModal}>
                            <span aria-hidden="true">
                                <i className='bx bx-x'></i>
                            </span>
                        </button>

                        <div className="modal-body">
                            <h3>View Product</h3>

                            <div className="view-product-content">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="product-img">
                                            <img src={product.imageUrl} className="main-image" alt="image" />
                                            {/* <div className="sale-tag">Sale!</div> */}
                                            {/* <div className="new-tag">New!</div> */}
                                            {/* <span className="discount">20% OFF</span> */}
                                            {
                                                product.onSale ? (
                                                    <div className="sale-tag">Sale!</div>
                                                ) : null
                                            }

                                            {
                                                product.new ? (
                                                    <div className="new-tag">New!</div>
                                                ) : null
                                            }

                                            {
                                                product.discount ? (
                                                <div className="discount">{product.discountOff}% OFF</div>
                                                ) : null
                                            }
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="products-details-desc">
                                            <h3>{product.title}</h3>
                                            <p>{product.description}</p>

                                            <div className="price">
                                                {
                                                    product.offer ? (
                                                        <React.Fragment>
                                                            <span className="old-price">${product.oldPrice}</span>
                                                            <span className="new-price">${product.newPrice}</span>
                                                        </React.Fragment>
                                                    ) : (
                                                        <span className="new-price">${product.oldPrice}</span>
                                                    )
                                                }
                                            </div>

                                            <ul className="products-info">
                                                <li>
                                                    <span>Availability:</span>
                                                    <Link href="#">
                                                        <a onClick={e => e.preventDefault()}>In stock (7 items)</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <span>Product Type:</span> 
                                                    <Link href="#">
                                                        <a onClick={e => e.preventDefault()}>{product.type}</a>
                                                    </Link>
                                                </li>
                                            </ul>

                                            <ul className="products-info">
                                                <li>
                                                    <span>Product Categories:</span> 
                                                    <Link href="#">
                                                        <a onClick={e => e.preventDefault()}>product.type}</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ViewProductModal;