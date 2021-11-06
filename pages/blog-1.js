import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogGridTwo from '../components/Blog/BlogGridTwo';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

class Blog1 extends Component {
    render() {
        return (
            <React.Fragment>
                <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="Blog Grid (2 in Row)" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Blog" 
                /> 
                <BlogGridTwo />
                <FacilitySlider />
                <InstagramFeed />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Blog1;