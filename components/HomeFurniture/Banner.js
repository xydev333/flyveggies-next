import React from 'react';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="furniture-banner">
            <div className="furniture-banner-content">
                <span className="sub-title">Summer Collections</span>
                <h1>New Arrivals!</h1>
                <p>Take 20% Off ‘Sale Must-Haves'</p>

                <div className="btn-box">
                    <Link href="#">
                        <a className="default-btn">Shop Now</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;