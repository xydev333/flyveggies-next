import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { removeItem, addQuantity, subtractQuantity } from '../../store/actions/cartActions';

class CartTable extends Component {
    handleRemove = (id) => {
        this.props.removeItem(id);

        toast.error('Removed from cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        let cartItems = this.props.products.length ? 
        (
            this.props.products.map((data, idx) => {
                return(
                    <tr key={idx}>
                        <td className="product-thumbnail">
                            <a href="#">
                                <img src={data.imageUrl} alt="item" />
                            </a>
                        </td>

                        <td className="product-name">
                            <a href="#">{data.title}</a>
                        </td>

                        <td className="product-price">
                            <span className="unit-amount">${data.newPrice}</span>
                        </td>

                        <td className="product-quantity">
                            <div className="input-counter">
                                <span 
                                    className="minus-btn"
                                    onClick={()=>{this.handleSubtractQuantity(data.id)}}
                                >
                                    <i className='bx bx-minus'></i>
                                </span>
                                <input 
                                    type="text" 
                                    value={data.quantity} 
                                    min="1" 
                                    max={10} 
                                    readOnly={true}
                                    onChange={e => (e)}
                                />
                                <span 
                                    className="plus-btn"
                                    onClick={()=>{this.handleAddQuantity(data.id)}}
                                >
                                    <i className='bx bx-plus'></i>
                                </span>
                            </div>
                        </td>

                        <td className="product-subtotal">
                            <span className="subtotal-amount">${data.newPrice * data.quantity}</span>
                        
                            <Link href="#">
                                <a className="remove" onClick={(e)=>{e.preventDefault();this.handleRemove(data.id)}}>
                                    <i className='bx bx-trash'></i>
                                </a>
                            </Link>
                        </td>
                    </tr>
                )
            })
        ) : (
            <tr>
                <td className="product-thumbnail" colSpan="6">
                    <p>Empty.</p>
                </td>
            </tr>
        )
        return (
            <section className="cart-area ptb-100">
                <div className="container">
                    <form>
                        <div className="cart-table table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    { cartItems }
                                </tbody>
                            </table>
                        </div>

                        <div className="cart-buttons">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <Link href="/products-without-sidebar">
                                        <a className="optional-btn">Continue Shopping</a>
                                    </Link>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="cart-totals">
                                        <h3>Cart Totals</h3>

                                        <ul>
                                            <li>Subtotal <span>${this.props.total.toFixed(2)}</span></li>
                                            <li>Shipping <span>$30.00</span></li>
                                            <li>Total <span>${(this.props.total + 30).toFixed(2)}</span></li>
                                        </ul>
                                        
                                        <Link href="/checkout">
                                            <a className="default-btn">Proceed to Checkout</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.cartReducer.addedItems,
        total: state.cartReducer.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {dispatch(removeItem(id))},
        addQuantity: (id) => {dispatch(addQuantity(id))},
        subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartTable)