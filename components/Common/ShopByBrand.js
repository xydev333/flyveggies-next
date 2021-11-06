import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-left'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
    responsive: {
        0: {
            items: 2,
        },
        576: {
            items: 3,
        },
        768: {
            items: 4,
        },
        1200: {
            items: 7,
        }
    }
}

class ShopByBrand extends Component {
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
            <div className="brand-area ptb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Shop By Brand</h2>
                    </div>
                    
                    {this.state.display ? <OwlCarousel 
                        className="brand-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="brand-item">
                            <a href="#"><img src={require('../../images/brand/brand1.png')} alt="image" /></a>
                        </div>

                        <div className="brand-item">
                            <a href="#"><img src={require('../../images/brand/brand2.png')} alt="image" /></a>
                        </div>

                        <div className="brand-item">
                            <a href="#"><img src={require('../../images/brand/brand3.png')} alt="image" /></a>
                        </div>

                        <div className="brand-item">
                            <a href="#"><img src={require('../../images/brand/brand4.png')} alt="image" /></a>
                        </div>

                        <div className="brand-item">
                            <a href="#"><img src={require('../../images/brand/brand5.png')} alt="image" /></a>
                        </div>

                        <div className="brand-item">
                            <a href="#"><img src={require('../../images/brand/brand6.png')} alt="image" /></a>
                        </div>
                    </OwlCarousel> : null }
                </div>
            </div>
        );
    }
}

export default ShopByBrand;