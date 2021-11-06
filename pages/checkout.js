import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CheckoutContent from '../components/Checkout/CheckoutContent';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

class Checkout extends Component {
    render() {
        return (
            <React.Fragment>
               <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="Checkout" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Checkout" 
                /> 
                <CheckoutContent /> 
                <FacilitySlider />
                <InstagramFeed />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Checkout;