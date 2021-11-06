import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
        "<i class='flaticon-left'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
}

class Banner extends React.Component{
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
    render(){
        return(
            <React.Fragment>
                {this.state.display ? <OwlCarousel 
                    className="home-slides-two owl-carousel owl-theme"
                    {...options}
                >
                    <div className="main-banner banner-bg10">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="banner-content">
                                                <div className="line"></div>
                                                <span className="sub-title">Best Seller</span>
                                                <h1>Medical Mask</h1>

                                                <p>Be Clean & Keep Clean, Maintain Social Distance, Avoid All Kinds of Crowds including Social Gathering, Protect Yourself and Others, Save Humankind!</p>

                                                <div className="btn-box">
                                                    <Link href="/products-left-sidebar">
                                                        <a className="default-btn">Shop Now!</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-banner banner-bg11">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="banner-content">
                                                <div className="line"></div>
                                                <span className="sub-title">Trading Collection</span>
                                                <h1>Hand Sanitizer</h1>

                                                <p>Be Clean & Keep Clean, Maintain Social Distance, Avoid All Kinds of Crowds including Social Gathering, Protect Yourself and Others, Save Humankind!</p>

                                                <div className="btn-box">
                                                    <Link href="/products-left-sidebar">
                                                        <a className="default-btn">Shop Now!</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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