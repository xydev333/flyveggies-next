import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

class ForgotPassword extends Component {
    render() {
        return (
            <React.Fragment>
               <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="My Account" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Login" 
                /> 

                <section className="signup-area ptb-100">
                    <div className="container">
                        <div className="signup-content">
                            <div className="text-center mb-4">
                                <h2 className="mb-2">Reset Password</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <form className="signup-form">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Username or email address" />
                                </div>

                                <button type="submit" className="default-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>

                <FacilitySlider />
                <InstagramFeed />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ForgotPassword;