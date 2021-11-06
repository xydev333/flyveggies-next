import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import Link from 'next/link';

class Error404 extends Component {
    render() {
        return (
            <React.Fragment>
               <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="404 Not Found" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="404 Not Found" 
                /> 

                <section className="error-area ptb-100">
                    <div className="container">
                        <div className="error-content">
                            <img src={require("../images/error-404.png")} alt="error" />
                            <h3>Page Not Found</h3>
                            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                            <Link href="/">
                                <a className="default-btn">Go to Home</a>
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}

export default Error404;