import React from 'react';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="jewelry-main-banner">
            <div className="jewelry-banner-content">
                <div className="line"></div>
                <span className="sub-title">Trending Collection</span>
                <h1>Jewelry Earring</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <Link href="#">
                    <a className="default-btn">Shop Now</a>
                </Link>
            </div>
        </div>
    )
}

export default Banner;