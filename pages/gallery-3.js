import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import GalleryThreeGridFullWidth from '../components/Gallery/GalleryThreeGridFullWidth';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

class Gallery3 extends Component {
    render() {
        return (
            <React.Fragment>
               <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="Gallery Full Width (3 in Row)" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Gallery" 
                /> 
                <GalleryThreeGridFullWidth />
                <FacilitySlider />
                <InstagramFeed />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Gallery3;