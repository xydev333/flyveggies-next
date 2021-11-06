import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Payment from '../payments/Payment';

class CheckoutForm extends Component {
    handleEmptyForm = () => {
        toast.error('Please fillup the form carefully', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    render() {
        let totalAmount = (this.props.total + this.props.shipping).toFixed(2)
        let { disabled } = this.props;
        return (
            <div className="col-lg-6 col-md-12">
                <div className="order-details">
                    <h3 className="title">Your Order</h3>

                    <div className="order-table table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.props.products.map((data, idx) => (
                                    <tr key={idx}>
                                        <td className="product-name">
                                            <a href="#">{data.title}</a>
                                        </td>

                                        <td className="product-total">
                                            <span className="subtotal-amount">${data.newPrice * data.quantity}</span>
                                        </td>
                                    </tr>
                                ))}
                                
                                <tr>
                                    <td className="order-subtotal">
                                        <span>Cart Subtotal</span>
                                    </td>

                                    <td className="order-subtotal-price">
                                        <span className="order-subtotal-amount">${this.props.total}</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="order-shipping">
                                        <span>Shipping</span>
                                    </td>

                                    <td className="shipping-price">
                                        <span>$30</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="total-price">
                                        <span>Order Total</span>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">${totalAmount}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="payment-box">
                        <div className="payment-method">
                            <p>
                                <input type="radio" id="direct-bank-transfer" name="radio-group" defaultChecked />
                                <label>Direct Order</label>
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                            </p>
                        </div>

                        {
                            disabled ? (
                                <Link href="#">
                                    <a 
                                        className={disabled ? 'default-btn disabled-btn' : 'default-btn'}
                                        onClick={e => {
                                            e.preventDefault();
                                            this.handleEmptyForm();
                                        }}
                                    >Place Order</a>
                                </Link>
                            ) : (
                                <Payment 
                                    amount={totalAmount * 100}
                                    userData={this.props.stateData}
                                    disabled={disabled}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems,
        total: state.total,
        shipping: state.shipping
    }
}

export default connect(
    mapStateToProps
)(CheckoutForm)