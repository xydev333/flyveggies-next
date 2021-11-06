import React from 'react';
import { connect } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import Banner from '../components/HomeJewelry/Banner';
import CategoryBanner from '../components/HomeJewelry/CategoryBanner';
import Testimonials from '../components/HomeJewelry/Testimonials';
import BlogPost from '../components/HomeJewelry/BlogPost';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import RecentProducts from '../components/Shared/RecentProducts';

const Jewelry = ({ products }) => {
    return (
       <React.Fragment>
            <TopHeader />
            <Navbar />
            <Banner />
            <CategoryBanner />
            <RecentProducts products={products.slice(0, 9)} />
            <div className="testimonials-section">
                <Testimonials />
            </div>

            <BlogPost />
            <InstagramFeed />
            <Footer />
       </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.filter( product => product.type == 'jewelry' )
    }
}

export default connect(mapStateToProps)(Jewelry)