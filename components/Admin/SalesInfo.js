import React, { Component } from 'react';

class SalesInfo extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="stats-card">
                        <div className="media align-items-center justify-content-between">
                            <div className="ml-0">
                                <h3>Total Revenue</h3>
                                <p>(Last Month)</p>
                            </div>
                            <div className="avatar avatar-pink">
                                <i className='bx bxs-badge-dollar'></i>
                            </div>
                        </div>
 
                        <h4 className="growth">
                            $20,000 
                            <span className="badge badge_success">
                                <i className='bx bx-up-arrow-alt'></i> 
                                Revenue up
                            </span>
                        </h4>
                    </div>
                </div>
 
                <div className="col-lg-3 col-md-6">
                    <div className="stats-card">
                        <div className="media align-items-center justify-content-between">
                            <div className="ml-0">
                                <h3>Total Order</h3>
                                <p>(Last Month)</p>
                            </div>
                            <div className="avatar avatar-blue">
                                <i className='bx bx-cart-alt'></i>
                            </div>
                        </div>
 
                        <h4 className="growth">
                            69,252 
                            <span className="badge badge_success">
                                <i className='bx bx-up-arrow-alt'></i> 
                                Order up
                            </span>
                        </h4>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="stats-card">
                        <div className="media align-items-center justify-content-between">
                            <div className="ml-0">
                                <h3>New Customer</h3>
                                <p>(Last Week)</p>
                            </div>
                            <div className="avatar avatar-purple">
                                <i className='bx bx-user-circle'></i>
                            </div>
                        </div>
 
                        <h4 className="growth">
                            10,332
                            <span className="badge badge_success">
                                <i className='bx bx-up-arrow-alt'></i> 
                                Customer up
                            </span>
                        </h4>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="stats-card">
                        <div className="media align-items-center justify-content-between">
                            <div className="ml-0">
                                <h3>Total Delivery</h3>
                                <p>(Last Month)</p>
                            </div>
                            <div className="avatar avatar-gold">
                                <i className='bx bx-bus'></i>
                            </div>
                        </div>
 
                        <h4 className="growth">
                            30,232
                            <span className="badge badge_danger">
                                <i className='bx bx-down-arrow-alt'></i>
                                Delivery down 
                            </span>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default SalesInfo;