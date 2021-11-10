import React from 'react';
import { connect } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import Banner from '../components/HomeElectronics/Banner';
import CategoryBanner from '../components/HomeElectronics/CategoryBanner';
import Testimonials from '../components/HomeElectronics/Testimonials';
import BlogPost from '../components/HomeElectronics/BlogPost';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import RecentProducts from '../components/Shared/RecentProducts';

const Electronics = ({ products }) => {
    console.log(products)
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
    const products = state.cartReducer.products.filter( product => product.type == 'electronics' )
    return {
        products: products
    }
}

export default connect(mapStateToProps)(Electronics)