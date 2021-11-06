import React from 'react';
import { connect } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import Banner from '../components/HomeFurniture/Banner';
import CategoryBanner from '../components/HomeFurniture/CategoryBanner';
import Partner from '../components/Common/Partner';
import BlogPost from '../components/HomeFurniture/BlogPost';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import RecentProducts from '../components/Shared/RecentProducts';

const Furniture = ({ products }) => {
    return (
       <React.Fragment>
            <TopHeader />
            <Navbar />
            <Banner />
            <CategoryBanner />
            <RecentProducts products={products.slice(0, 9)} />
            <Partner />
            <BlogPost />
            <InstagramFeed />
            <Footer />
       </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.filter( product => product.type == 'furniture' )
    }
}

export default connect(mapStateToProps)(Furniture)