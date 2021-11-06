import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
               <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="Contact Us" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Contact Us" 
                /> 
                <ContactForm />
                <FacilitySlider />
                <InstagramFeed />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;