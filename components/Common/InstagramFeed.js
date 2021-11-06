import React, { Component } from 'react';
import Link from 'next/link';
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
            items: 6,
        }
    }
}

class InstagramFeed extends Component {

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
            <div className="instagram-area">
                <div className="container-fluid">
                    <div className="instagram-title">
                        <a href="#" target="_blank">
                            <i className='bx bxl-instagram'></i> Follow us on @livani
                        </a>
                    </div>

                    {this.state.display ? <OwlCarousel 
                        className="instagram-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="single-instagram-post">
                            <img src={require("../../images/instagram/insta1.jpg")} alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>

                        <div className="single-instagram-post">
                            <img src={require("../../images/instagram/insta2.jpg")} alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>

                        <div className="single-instagram-post">
                            <img src={require("../../images/instagram/insta3.jpg")} alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src={require("../../images/instagram/insta4.jpg")} alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src={require("../../images/instagram/insta5.jpg")} alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src={require("../../images/instagram/insta6.jpg")} alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src={require("../../images/instagram/insta7.jpg")} alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src={require("../../images/instagram/insta8.jpg")} alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src={require("../../images/instagram/insta9.jpg")} alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                        
                        <div className="single-instagram-post">
                            <img src={require("../../images/instagram/insta10.jpg")} alt="image" />

                            <i className='bx bxl-instagram'></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default InstagramFeed;