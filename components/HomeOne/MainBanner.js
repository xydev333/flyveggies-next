import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 500,
    items: 1,
    navText: [
        "<i class='flaticon-left'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
}

class MainBanner extends Component {
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
                    className="home-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="main-banner banner-bg1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content text-center">
                                                <span
                                                    className={
                                                        isVisible ? "sub-title animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Limited Time Offer!
                                                </span>
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Winter-Spring!
                                                </h1>
                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Take 20% Off ‘Sale Must-Haves'
                                                </p>

                                                <div className="btn-box">
                                                    <Link href="/products-left-sidebar">
                                                        <a 
                                                            className={
                                                                `default-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            Shop Women's
                                                        </a>
                                                    </Link>

                                                    <Link href="/products-right-sidebar">
                                                        <a 
                                                            className={
                                                                `optional-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            Shop Men's
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-banner banner-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content">
                                                <span
                                                    className={
                                                        isVisible ? "sub-title animated fadeInUp slow opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Exclusive Offer!
                                                </span>
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Spring-Show!
                                                </h1>
                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Leap year offer ‘Sale Must-Haves'
                                                </p>
                                                
                                                <div className="btn-box">
                                                    <Link href="/products-left-sidebar">
                                                        <a 
                                                            className={
                                                                `default-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            Shop Women's
                                                        </a>
                                                    </Link>

                                                    <Link href="/products-right-sidebar">
                                                        <a 
                                                            className={
                                                                `optional-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            Shop Men's
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-banner banner-bg3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content">
                                                <span
                                                    className={
                                                        isVisible ? "sub-title animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Buy Now From Livani!
                                                </span>
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    New Season Canvas
                                                </h1>
                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Take 20% Off ‘Sale Must-Haves'
                                                </p>
                                                
                                                <div className="btn-box">
                                                    <Link href="/products-left-sidebar">
                                                        <a 
                                                            className={
                                                                `default-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            Shop Women's
                                                        </a>
                                                    </Link>

                                                    <Link href="/products-right-sidebar">
                                                        <a 
                                                            className={
                                                                `optional-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            Shop Men's
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </React.Fragment>
        );
    }
}

export default MainBanner;
