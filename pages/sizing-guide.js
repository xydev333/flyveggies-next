import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import MenWomensApparelSizing from '../components/SizingGuide/MenWomensApparelSizing';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

class SizingGuide extends Component {
    render() {
        return (
            <React.Fragment>
               <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="Sizing Guide" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Sizing Guide" 
                /> 
                <MenWomensApparelSizing />
                <FacilitySlider />
                <InstagramFeed />
                <Footer />
            </React.Fragment>
        );
    }
}

export default SizingGuide;