import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogGridThree from '../components/Blog/BlogGridThree';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

class Blog2 extends Component {
    render() {
        return (
            <React.Fragment>
                <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="Blog Grid (3 in Row)" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Blog" 
                /> 
                <BlogGridThree />
                <FacilitySlider />
                <InstagramFeed />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Blog2;