import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { addQuantityWithNumber } from '../../store/actions/cartActions';
import { toast } from 'react-toastify';

class QuickViewModal extends Component {

    state = {
        modal: false,
        qty: 1,
        max: 10,
        min: 1
    };

    closeModal = () => {
        this.props.onClick(this.state.modal);
        this.setState({
            qty: 1
        })
    }

    handleAddToCartFromView = () => {
        this.props.addQuantityWithNumber(this.props.product.id, this.state.qty); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });

        setTimeout(() => {this.closeModal()},2000); 
    }

    IncrementItem = () => {
        this.setState(prevState => {
            if(prevState.qty < 10) {
                return {
                    qty: prevState.qty + 1
                }
            } else {
                return null;
            }
        });
    }

    DecreaseItem = () => {
        this.setState(prevState => {
            if(prevState.qty > 1) {
                return {
                    qty: prevState.qty - 1
                }
            } else {
                return null;
            }
        });
    }

    render() {
        let { product } = this.props;
        return (
            <div className={`modal fade productsQuickView ${this.props.active}`}> 
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="close" onClick={this.closeModal}>
                            <span aria-hidden="true">
                                <i className='bx bx-x'></i>
                            </span>
                        </button>

                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="products-image">
                                    <img src={product["imageUrl"]} alt="image" />
                                    {
                                        product.onSale ? (
                                            <div className="sale-tag">Sale!</div>
                                        ) : null
                                    }
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="products-content">
                                    <h3>
                                        <Link href="#">
                                            <a>{product.title}</a>
                                        </Link>
                                    </h3>

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

                                    <div className="products-review">
                                        <div className="rating">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
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
                                        <h4>Color:</h4>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a data-toggle="tooltip" data-placement="top" title="Black" className="color-black"></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a data-toggle="tooltip" data-placement="top" title="White" className="color-white"></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a data-toggle="tooltip" data-placement="top" title="Green" className="color-green"></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a data-toggle="tooltip" data-placement="top" title="Yellow Green" className="color-yellowgreen"></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a data-toggle="tooltip" data-placement="top" title="Teal" className="color-teal"></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="products-size-wrapper">
                                        <h4>Size:</h4>

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

                                    <div className="products-add-to-cart">
                                        <div className="input-counter">
                                            <span 
                                                className="minus-btn"
                                                onClick={this.DecreaseItem}
                                            >
                                                <i className='bx bx-minus'></i>
                                            </span>

                                            <input 
                                                type="text" 
                                                value={this.state.qty}
                                                min={this.state.min}
                                                max={this.state.max} 
                                                onChange={e => this.setState({ qty: e.target.value })}
                                            />

                                            <span 
                                                className="plus-btn"
                                                onClick={this.IncrementItem}
                                            >
                                                <i className='bx bx-plus'></i>
                                            </span>
                                        </div>

                                        <button 
                                            type="submit" 
                                            className="default-btn"
                                            onClick={this.handleAddToCartFromView}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>

                                    <Link href="#">
                                        <a className="view-full-info">View Full Info</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addQuantityWithNumber: (id, qty) => {dispatch(addQuantityWithNumber(id, qty))}
    }
}

export default connect(
    null,
    mapDispatchToProps
)(QuickViewModal)