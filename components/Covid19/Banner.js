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
                    <div className="main-banner banner-bg22">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="banner-content">
                                                <div className="line"></div>
                                                <span className="sub-title text-primary">Best Seller</span>
                                                <h1>THC Gummy Bears</h1>

                                                <h5 className="text  text-Dark text-bold shadow-sm">The Delicious,Strong,and Yummy Gummy Bears! 
                                                <br/>Made with our own local strain.</h5>

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

                    <div className="main-banner banner-bg21">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="banner-content">
                                                <div className="line"></div>
                                                <span className="sub-title text text-light">Todays Medicine is Green</span>
                                                <h1 className="text text-light">Marijuana: Todays Medicine</h1>

                                                <p className=" text text-light ">Nowadays every one is taking to a new type of medicine! Frustrated with the pills and needle of todays big Pharma we set out to make that medicine right here in the USA!</p>

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