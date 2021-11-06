import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsOne from '../components/BlogDetails/BlogDetailsOne';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

class SingleBlog1 extends Component {
    render() {
        return (
            <React.Fragment>
                <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="Blog Details" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Blog Details" 
                /> 
                <BlogDetailsOne />
                <FacilitySlider />
                <InstagramFeed />
                <Footer />
            </React.Fragment>
        );
    }
}

export default SingleBlog1;