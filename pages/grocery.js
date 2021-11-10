import React from 'react';
import { connect } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import Banner from '../components/HomeGrocery/Banner';
import CategoryBanner from '../components/HomeGrocery/CategoryBanner';
import Partner from '../components/Common/Partner';
import BlogPost from '../components/HomeGrocery/BlogPost';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import RecentProducts from '../components/HomeGrocery/RecentProducts';
import PopularProducts from '../components/HomeGrocery/PopularProducts';
import BestSellingProducts from '../components/HomeGrocery/BestSellingProducts';

const Grocery = ({ products }) => {
    return (
       <div className="grocery-demo">
            <TopHeader />
            <Navbar />
            <Banner />
            <RecentProducts products={products.slice(0, 6)} />
            <CategoryBanner />
            <PopularProducts products={products.slice(0, 6)} />
            <Partner />
            <BestSellingProducts products={products.slice(0, 6)} />
            <BlogPost />
            <InstagramFeed />
            <Footer />
       </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.cartReducer.products.filter( product => product.type == 'grocery' )
    }
}

export default connect(mapStateToProps)(Grocery)