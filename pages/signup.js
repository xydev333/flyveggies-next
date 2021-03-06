import React, { useState, Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { userLogin } from '../store/actions/cartActions';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import { useAuth } from '../context/AuthContext';
import { useRef } from 'react/cjs/react.development';
import { db } from '../firebase/index'
import Alert from '../components/Alert/Alert'
import { useRouter } from 'next/router';
import * as ERRORCODE from '../constants/errorCode'

const Signup = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const ageRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup } = useAuth();
    const router = useRouter()

    async function handleSignup(e) {
        e.preventDefault();

        if (ageRef.current.value < 21) {
            Alert('warning', `You can't register if you are not 21`);
            return ;
        }

        await signup(emailRef.current.value, passwordRef.current.value)
                .then(authUser => {
                    db.collection("users")
                    .doc(authUser.user.uid)
                    .set({
                        firstname: firstNameRef.current.value,
                        lastname: lastNameRef.current.value
                    })
                    .then(() => {
                        router.push('/login');
                        Alert('success', 'Successfully Registered!')
                    })
                    .catch(function (error) {
                        console.error("Error writing UserName: ", error);
                    });
                })
                .catch(error => {
                    switch(error.code) {
                        case ERRORCODE.EMAIL_EXIST: 
                            Alert('error', 'Email Already Exist')
                            break
                        case ERRORCODE.WEAK_PASSWORD:
                            Alert('warning', 'Password is too weak')
                            break
                    } 
                });
    }

    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
            <PageBanner 
                pageTitle="My Account" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sign Up" 
            /> 

            <section className="signup-area ptb-100">
                <div className="container">
                    <div className="signup-content">
                        <h2>Create an Account</h2>

                        <form onSubmit={handleSignup} className="signup-form">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" ref={firstNameRef} placeholder="First Name" />
                            </div>

                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-control" ref={lastNameRef} placeholder="Last Name" />
                            </div>

                            <div className="form-group">
                                <label>Age</label>
                                <input type="text" className="form-control" ref={ageRef} placeholder="Age" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" ref={emailRef} placeholder="my@gmail.com" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" ref={passwordRef} placeholder="********" />
                            </div>

                            <button type="submit" className="default-btn">Signup</button>
                            
                            <div className="text-center">
                                <Link href="/login">
                                    <a className="return-login">or Return to Login</a>
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

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: () => {dispatch(userLogin())}
    }
}

export default connect(null, mapDispatchToProps)(Signup)