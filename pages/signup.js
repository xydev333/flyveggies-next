import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { userLogin } from '../store/actions/cartActions';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

class Signup extends Component {

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

                <section className="signup-area ptb-100">
                    <div className="container">
                        <div className="signup-content">
                            <h2>Create an Account</h2>

                            <form onSubmit={this.handleLogin} className="signup-form">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" id="fname" name="fname" />
                                </div>

                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" id="lname" name="lname" />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" id="name" name="name" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" id="password" name="password" />
                                </div>

                                <button type="submit" className="default-btn">Signup</button>
                                
                                <div className="text-center">
                                    <Link href="/">
                                        <a className="return-store">or Return to Store</a>
                                    </Link>
                                </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: () => {dispatch(userLogin())}
    }
}

export default connect(null, mapDispatchToProps)(Signup)