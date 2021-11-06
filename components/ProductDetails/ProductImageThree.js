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
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
}

class ProductImageThree extends Component {

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
            <React.Fragment>
                {this.state.display ? <OwlCarousel 
                    className="products-details-image-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="image">
                        <img src={require("../../images/products/img3.jpg")} alt="image" />
                    </div>

                    <div className="image">
                        <img src={require("../../images/products/img4.jpg")} alt="image" />
                    </div>

                    <div className="image">
                        <img src={require("../../images/products/img-hover3.jpg")} alt="image" />
                    </div>

                    <div className="image">
                        <img src={require("../../images/products/img-hover4.jpg")} alt="image" />
                    </div>
                </OwlCarousel> : ''}
            </React.Fragment>
        );
    }
}

export default ProductImageThree;