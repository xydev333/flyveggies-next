import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import Alert from '../components/Alert/Alert'
import { useAuth } from '../context/AuthContext';
import { useRef } from 'react';

const ForgotPassword = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth();

    const onSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;

        if (emailRef.current.value === '') {
            Alert('error', 'Please input Email Address');
            return ;
        } else {
            resetPassword(email)
            .then(() => {
                Alert('success', 'Reset Email Sent!')
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

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
                        </div>

                        <form className="signup-form" onSubmit={onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="email"
                                    className="form-control"
                                    placeholder="Email address"
                                    ref = {emailRef}
                                />
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

export default ForgotPassword;