import React from 'react';
import { ToastContainer, toast, Flip } from 'react-toastify';
import Router from 'next/router'
import { firebase } from '../../firebase';
class Signin extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleSignInWithEmail = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            toast.success('You are signed In successfully!', {
                position: "bottom-left",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            setTimeout(function(){
                Router.push('/admin/dashboard');
            }, 1500);
        })
        .catch(function(error) {
            toast.error(error.message, {
                position: "bottom-left",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            console.log(error)
        });
    }
    render() {
        return (
            <div className="admin-signin ptb-100">
                <div className="d-table">
                    <div className="d-table-cell">
                        <ToastContainer
                            transition={Flip} 
                        />
 
                        <div className="container">
                            <div className="login-content">
                                <h2>Admin Signin</h2>

                                <form onSubmit={this.handleSignInWithEmail} className="login-form">
                                    <div className="form-group">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="Username or email address" 
                                            value={this.state.email}
                                            onChange={e => this.setState({ email: e.target.value })}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={e => this.setState({ password: e.target.value })} 
                                        />
                                    </div>

                                    <button type="submit" className="default-btn">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Signin