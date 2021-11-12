import React, { useState, Component, useEffect } from 'react';
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
import { db } from '../firebase/index'
import Alert from '../components/Alert/Alert'
import { useRouter } from 'next/router';
import * as ERRORCODE from '../constants/errorCode'

const Profile = () => {
    const { currentUser } = useAuth();  
    const { updatePassword } = useAuth();
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    
    const router = useRouter()

    useEffect(() => {
      db.collection('users').doc(currentUser.uid).get()
      .then((doc) => {
        setfirstname(doc.data().firstname)
        setlastname(doc.data().lastname)
        setemail(currentUser.email)
      })
    }, [])
  
    const updatefirstname = e => setfirstname(e.target.value);
    const updatelastname = e => setlastname(e.target.value);
    const updatepassword = e => setpassword(e.target.value);
    const updateconfirmpassword = e => setconfirmpassword(e.target.value);

    async function handleUpdate(e) {
      e.preventDefault();

      if (password !== confirmpassword) {
        Alert('error', 'Password does not match');
      } else if(password === '') {
        Alert('error', 'Please input password');
      } else {
        updatePassword(password)
        .then(() => {
          db.collection('users').doc(currentUser.uid).set({
            firstname: firstname,
            lastname: lastname 
          })
        })
        .then(() => {
          Alert('success', 'Profile updated successfully');
          router.push('/');
        })
        .catch((e) => {
          switch(e.code) {
            case ERRORCODE.WEAK_PASSWORD:
              Alert('warning', 'Password is too weak');
            case ERRORCODE.REQUIRES_RECENT_LOGIN:
              Alert('error', 'Please login again to update your profile');
          }
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
                activePageText="Profile" 
            /> 

            <section className="signup-area ptb-100">
                <div className="container">
                    <div className="signup-content">
                        <h2>Update Profile</h2>

                        <form onSubmit={handleUpdate} className="signup-form">
                            <div className="form-group">
                                <label>First Name</label>
                                <input 
                                  type="text"
                                  className="form-control"
                                  value={firstname}
                                  placeholder="First Name"
                                  onChange={updatefirstname}
                                />
                            </div>

                            <div className="form-group">
                                <label>Last Name</label>
                                <input 
                                  type="text"
                                  className="form-control"
                                  placeholder="Last Name"
                                  value={lastname}
                                  onChange={updatelastname}
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="my@mail.com"
                                  value={email}
                                  readOnly
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  value={password}
                                  onChange={updatepassword}
                                  placeholder="********"
                                />
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  value={confirmpassword}
                                  onChange={updateconfirmpassword}
                                  placeholder="********"
                                />
                            </div>

                            <button type="submit" className="default-btn">Update</button>
                            
                            <div className="text-center">
                                <Link href="/">
                                    <a className="return-login">or Return to Store</a>
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

export default connect(null, mapDispatchToProps)(Profile)