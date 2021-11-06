import React from 'react';
import axios from "axios"
import Router from 'next/router'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { resetCart } from '../../store/actions/cartActions';
import {firebase} from '../../firebase';

class Payments extends React.Component {
    onToken = async token => {
        const body = {
            customerDetails: {
                firstName: this.props.userData.firstName.value,
                lastName: this.props.userData.lastName.value,
                email: this.props.userData.email.value,
                phone: this.props.userData.phone.value,
                address: this.props.userData.address.value,
                city: this.props.userData.city.value,
                state: this.props.userData.state.value,
                zip: this.props.userData.zip.value
            },
            items: {...this.props.products},
            amount: this.props.total,
            status: 'pending',
            token: token,
            createdAt: new Date()
        };  
        await axios.post("/api/checkout", body);
        const db = firebase.firestore();
        const dbOrderRef = db.collection('orders');
        dbOrderRef.add(body).then(() => {
            this.props.resetCart();
            toast.success('Submitted the order, we will contact you soon.', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            setTimeout(() => {Router.push('/')},3000);  
        });
    };

    render(){
        let { amount } = this.props;
        return (
            <React.Fragment>

                <div className="order-btn">
                    <StripeCheckout 
                        name="Livani"
                        description="React Next eCommerce Templates"
                        amount={amount}
                        currency="USD"
                        token={this.onToken}
                        stripeKey="pk_test_ZaZZWZGlvdIn12yFleIqyjSI00G4e18Kf7"
                        billingAddress={false}
                        closed={this.handleClick}
                    >
                        <button disabled={this.props.disabled} className={`default-btn`} >
                            Place Order
                        </button>
                    </StripeCheckout>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems,
        total: state.total,
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        resetCart: () => { dispatch(resetCart()) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Payments)