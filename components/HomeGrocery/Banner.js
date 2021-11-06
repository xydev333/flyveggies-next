import React from 'react';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="grocery-main-banner">
            <div className="grocery-banner-content">
                <h1>Groceries Delivered in 1 Hour</h1>
                <p>Natural Health Care Ingredients</p>
                <h2>50% OFF</h2>
                <Link href="#">
                    <a className="default-btn">Shop Now</a>
                </Link>
            </div>
        </div> 
    )
}

export default Banner;