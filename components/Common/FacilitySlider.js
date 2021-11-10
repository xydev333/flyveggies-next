import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
}

class FacilitySlider extends Component {

    _isMounted = false;
    state = {
        display: false,
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="facility-area pb-70">
                <div className="container">
                    {this.state.display ? <OwlCarousel 
                        className="facility-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-facility-box">
                            <div className="icon">
                                <i className='flaticon-tracking'></i>
                            </div>
                            <h3>Fast Shipping Worldwide</h3>
                        </div>

                        <div className="single-facility-box">
                            <div className="icon">
                                <i className='flaticon-return'></i>
                            </div>
                            <h3>Discret Packaging</h3>
                        </div>


                        <div className="single-facility-box">
                            <div className="icon">
                                <i className='flaticon-sale'></i>
                            </div>
                            <h3>Weekend Discount Coupon</h3>
                        </div>

                        <div className="single-facility-box">
                            <div className="icon">
                                <i className='flaticon-credit-card'></i>
                            </div>
                            <h3>Secure Payment Methods</h3>
                        </div>

                        <div className="single-facility-box">
                            <div className="icon">
                                <i className='flaticon-location'></i>
                            </div>
                            <h3>Mobile Friendly</h3>
                        </div>

                        <div className="single-facility-box">
                            <div className="icon">
                                <i className='flaticon-customer-service'></i>
                            </div>
                            <h3>Got question, Call Us!</h3>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default FacilitySlider;