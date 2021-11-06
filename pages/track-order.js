import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

class TrackOrder extends Component {
    render() {
        return (
            <React.Fragment>
               <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="Tracking Order" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Tracking Order" 
                /> 

                <section className="track-order-area ptb-100">
                    <div className="container">
                        <div className="track-order-content">
                            <h2>All In One Order Tracking</h2>

                            <form>
                                <div className="form-group">
                                    <label>Order ID</label>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label>Billing E-mail</label>
                                    <input type="email" className="form-control" />
                                </div>

                                <button type="submit" className="default-btn">Track Order</button>
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

export default TrackOrder;