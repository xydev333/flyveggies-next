import React, { Component, useEffect } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsOne from '../components/BlogDetails/BlogDetailsOne';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import { useRouter } from 'next/router'
import firebase from 'firebase';

function SingleBlog1() {
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        let isMounted = true;
        const db = firebase.firestore();
        const blogRef = db.collection('blogs').doc(id);
        if (isMounted) {
            Promise.all([
                blogRef.update({
                    views: firebase.firestore.FieldValue.increment(1)
                })
            ])
        }
        return () => { isMounted = false };
    }, [])
    
    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
            <PageBanner 
                pageTitle="Blog Details" 
                homePageUrl="/blog-5" 
                homePageText="Back" 
                activePageText="Blog Details" 
            /> 
            <BlogDetailsOne
                id = {id}
            />
            <FacilitySlider />
            <InstagramFeed />
            <Footer />
        </React.Fragment>
    );
}

export default SingleBlog1;