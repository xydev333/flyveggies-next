import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import LookbookGrid4 from '../components/Lookbook/LookbookGrid4';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

class Lookbook2 extends Component {
    render() {
        return (
            <React.Fragment>
               <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="Lookbook Grid Full Width (4 in Row)" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Lookbook" 
                /> 
                <LookbookGrid4 />
                <FacilitySlider />
                <InstagramFeed />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Lookbook2;