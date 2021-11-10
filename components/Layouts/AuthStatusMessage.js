import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import * as AUTH_STATUS from '../../constants/authStatus'

const AuthStatusMessage = () => {
  const authStatus = useSelector(state => state.authStatusReducer.authStatus);

  return (
    <>
      { 
        authStatus == AUTH_STATUS.VERIFICATION_EMAIL_SENT &&
        <div className="AuthStatusMessage"> 
          <p>Verfication Email Sent. Please check your inbox.</p>
        </div>  
      }

      { 
        authStatus == AUTH_STATUS.VERIFY_FIRST &&
        <div className="AuthStatusMessage"> 
          <p>Please verify your email first.</p>
        </div>  
      }

      { 
        authStatus == AUTH_STATUS.UNREGISTERD_USER &&
        <div className="AuthStatusMessage"> 
          <p>Unregisterd User. Please sign up first.</p>
        </div>  
      }

      { 
        authStatus == AUTH_STATUS.INCOREECT_PASSWORD &&
        <div className="AuthStatusMessage"> 
          <p>Incorrect Password.</p>
        </div>  
      }
    </>
  );
}

export default AuthStatusMessage