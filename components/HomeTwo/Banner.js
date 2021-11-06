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
                    <div className="main-banner banner-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="banner-content text-white">
                                                <div className="line"></div>
                                                <span className="sub-title">Trending Women's Collection</span>
                                                <h1>New Inspiration 2020</h1>
                                                <p>Click here to shop in your local currency. We ship over 2 million products around the world!</p>
                                                <div className="btn-box">
                                                    <Link href="/products-left-sidebar">
                                                        <a className="default-btn">Shop Women's</a>
                                                    </Link>
                                                    <Link href="/products-left-sidebar">
                                                        <a className="optional-btn">Shop Men's</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-banner banner-bg4">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="banner-content text-white">
                                                <div className="line"></div>
                                                <span className="sub-title">Make Your Fashion Smarter</span>
                                                <h1>Clothing made for you!</h1>
                                                <p>Click here to shop in your local currency. We ship over 2 million products around the world!</p>
                                                <div className="btn-box">
                                                    <Link href="/products-left-sidebar">
                                                        <a className="default-btn">Shop Women's</a>
                                                    </Link>
                                                    <Link href="/products-left-sidebar">
                                                        <a className="optional-btn">Shop Men's</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-banner banner-bg5">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="banner-content text-white">
                                                <div className="line"></div>
                                                <span className="sub-title">Clothing Made For You!</span>
                                                <h1>Your Fashion Smarter</h1>
                                                <p>Click here to shop in your local currency. We ship over 2 million products around the world!</p>
                                                <div className="btn-box">
                                                    <Link href="/products-left-sidebar">
                                                        <a className="default-btn">Shop Women's</a>
                                                    </Link>
                                                    <Link href="/products-left-sidebar">
                                                        <a className="optional-btn">Shop Men's</a>
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