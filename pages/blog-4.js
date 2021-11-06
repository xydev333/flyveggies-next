import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogGridFullWidth from '../components/Blog/BlogGridFullWidth';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

class Blog4 extends Component {
    render() {
        return (
            <React.Fragment>
                <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="Blog Grid (Full Width)" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Blog" 
                /> 
                <BlogGridFullWidth />
                <FacilitySlider />
                <InstagramFeed />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Blog4;