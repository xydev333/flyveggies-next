import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    mouseDrag: false,
    items: 1,
    navText: [
        "<i class='flaticon-left'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
}

class CategoriesOneGrid extends Component {

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
            <section className="offer-products-area ptb-100">
                <div className="container">
                    {this.state.display ? <OwlCarousel 
                        className="offer-products-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-offer-products">
                            <div className="content">
                                <h3>
                                    <Link href="/products-without-sidebar-3">
                                        <a>New Collections!</a>
                                    </Link>
                                </h3>
                                <p>Stylist Allison Taylor take on the summer season's trends.</p>

                                <Link href="/products-without-sidebar-3">
                                    <a className="default-btn">Discover Now!</a>
                                </Link>
                            </div>

                            <div className="image">
                                <Link href="/products-without-sidebar-3">
                                    <a>
                                        <img src={require("../../images/offer/offer1.jpg")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="single-offer-products">
                            <div className="content">
                                <h3>
                                    <Link href="/products-without-sidebar-3">
                                        <a>Our Popular Products</a>
                                    </Link>
                                </h3>
                                <p>Stylist Allison Taylor take on the summer season's trends.</p>

                                <Link href="/products-without-sidebar-3">
                                    <a className="default-btn">Discover Now!</a>
                                </Link>
                            </div>

                            <div className="image">
                                <Link href="/products-without-sidebar-3">
                                    <a>
                                        <img src={require("../../images/offer/offer2.jpg")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="single-offer-products">
                            <div className="content">
                                <h3>
                                    <Link href="/products-without-sidebar-3">
                                        <a>Hot Trending Products</a>
                                    </Link>
                                </h3>
                                <p>Stylist Allison Taylor take on the summer season's trends.</p>
                                
                                <Link href="/products-without-sidebar-3">
                                    <a className="default-btn">Discover Now!</a>
                                </Link>
                            </div>

                            <div className="image">
                                <Link href="/products-without-sidebar-3">
                                    <a>
                                        <img src={require("../../images/offer/offer3.jpg")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default CategoriesOneGrid;