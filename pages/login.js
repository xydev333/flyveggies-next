import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import { userLogin } from '../store/actions/cartActions';

class Login extends Component {

    handleLogin = (e) => {
        e.preventDefault();
        this.props.userLogin();
        Router.push('/');
    }
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

                <section className="login-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="login-content">
                                    <h2>Login</h2>

                                    <form onSubmit={this.handleLogin} className="login-form">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="demo@example.com" />
                                        </div>

                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="demo" />
                                        </div>

                                        <button type="submit" className="default-btn">Login</button>

                                        <div className="text-center">
                                            <Link href="/forgot-password">
                                                <a className="forgot-password">Lost your password?</a>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="new-customer-content">
                                    <h2>New Customer</h2>

                                    <span>Create an Account</span>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                    
                                    <Link href="/signup">
                                        <a className="optional-btn">Create an Account</a>
                                    </Link>
                                </div>
                            </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: () => {dispatch(userLogin())}
    }
}

export default connect(null, mapDispatchToProps)(Login)