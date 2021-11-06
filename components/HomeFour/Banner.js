import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    smartSpeed: 750,
    autoplay: true,
    navText: [
        "<i class='flaticon-left'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
}

class Banner extends Component {
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
                    className="home-slides-three owl-carousel owl-theme"
                    {...options}
                >
                    <div className="hero-banner">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="main-banner-content">
                                                        <span 
                                                            className={
                                                                isVisible ? "sub-title animated fadeInUp" : ''
                                                            }
                                                        >
                                                            
                                                            Limited Time Offer!
                                                        </span>
                                                        <h1
                                                            className={
                                                                isVisible ? "animated fadeInUp" : ''
                                                            }
                                                        >
                                                            Winter-Spring!
                                                        </h1>
                                                        <p
                                                            className={
                                                                isVisible ? "animated fadeInUp" : ''
                                                            }
                                                        >
                                                            Take 20% Off ‘Sale Must-Haves'
                                                        </p>

                                                        <div className="btn-box">
                                                            <div 
                                                                className={
                                                                    isVisible ? "animated fadeInUp" : ''
                                                                }
                                                            >
                                                                <Link href="/products-left-sidebar">
                                                                    <a className="default-btn">
                                                                        Shop Women's
                                                                    </a>
                                                                </Link>
                                                                <Link href="/products-left-sidebar">
                                                                    <a className="optional-btn">Shop Men's</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="banner-image">
                                                        <div 
                                                            className={
                                                                isVisible ? "circle animated zoomIn" : ''
                                                            }
                                                        ></div>
                                                        <img
                                                            className={
                                                                isVisible ? "animated fadeInUp" : ''
                                                            }
                                                            src={require('../../images/banner-img2.png')} alt="image" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-banner">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="main-banner-content">
                                                        <span 
                                                            className={
                                                                isVisible ? "sub-title animated fadeInUp" : ''
                                                            }
                                                        >
                                                            Exclusive Offer!
                                                        </span>
                                                        <h1
                                                            className={
                                                                isVisible ? "animated fadeInUp" : ''
                                                            }
                                                        >
                                                            Summer-Fashion!
                                                        </h1>
                                                        <p
                                                            className={
                                                                isVisible ? "animated fadeInUp" : ''
                                                            }
                                                        >
                                                            Leap year offer ‘Sale Must-Haves'
                                                        </p>

                                                        <div className="btn-box">
                                                            <div 
                                                                className={
                                                                    isVisible ? "animated fadeInUp" : ''
                                                                }
                                                            >
                                                                <Link href="/products-left-sidebar">
                                                                    <a className="default-btn">
                                                                        Shop Women's
                                                                    </a>
                                                                </Link>
                                                                <Link href="/products-left-sidebar">
                                                                    <a className="optional-btn">Shop Men's</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="banner-image">
                                                        <div 
                                                            className={
                                                                isVisible ? "circle animated zoomIn" : ''
                                                            }
                                                        ></div>
                                                        <img 
                                                            className={
                                                                isVisible ? "animated fadeInUp" : ''
                                                            }
                                                            src={require('../../images/banner-img1.png')} alt="image" />
                                                    </div>
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

export default Banner;