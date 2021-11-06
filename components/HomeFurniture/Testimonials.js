import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    center: true,
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

class Testimonials extends Component {

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
            <section className="testimonials-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Testimonials</span>
                        <h2>What Clients Says About Us</h2>
                    </div>

                    {this.state.display ? <OwlCarousel 
                        className="testimonials-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="single-testimonials-item">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <div className="info">
                                <img src={require("../../images/user1.jpg")} className="shadow rounded-circle" alt="image" />
                                <h3>John Smith</h3>
                            </div>
                        </div>

                        <div className="single-testimonials-item">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <div className="info">
                                <img src={require("../../images/user2.jpg")} className="shadow rounded-circle" alt="image" />
                                <h3>Sarah Taylor</h3>
                            </div>
                        </div>

                        <div className="single-testimonials-item">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <div className="info">
                                <img src={require("../../images/user3.jpg")} className="shadow rounded-circle" alt="image" />
                                <h3>David Warner</h3>
                            </div>
                        </div>

                        <div className="single-testimonials-item">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <div className="info">
                                <img src={require("../../images/user4.jpg")} className="shadow rounded-circle" alt="image" />
                                <h3>James Anderson</h3>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default Testimonials;