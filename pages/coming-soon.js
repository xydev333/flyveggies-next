import React, { Component } from 'react';
import Link from 'next/link';

class ComingSoon extends Component {

    state = {
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    };

    commingSoonTime = () => {
        let endTime = new Date("November 19, 2021 17:00:00 PDT");
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        this.setState({
            days, hours, minutes, seconds
        });
    }

    componentDidMount(){
        this.myInterval = setInterval(() => { 
            this.commingSoonTime();
        }, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.myInterval);
    };

    onSubmit = e => {
        e.preventDefault();
    };
    
    render() {
        return (
            <React.Fragment>
                <div className="coming-soon-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="coming-soon-content">
                                <Link href="/">
                                    <a className="logo">
                                        <img src={require("../images/flyveggieslogo.png")} alt="image" />
                                    </a>
                                </Link>

                                <h2>We are launching soon</h2>

                                <div id="timer" className="flex-wrap d-flex justify-content-center">
                                    <div id="days" className="align-items-center flex-column d-flex justify-content-center">
                                        {this.state.days} <span>Days</span>
                                    </div>
                                    <div id="hours" className="align-items-center flex-column d-flex justify-content-center">
                                        {this.state.hours} <span>Hours</span>
                                    </div>
                                    <div id="minutes" className="align-items-center flex-column d-flex justify-content-center">
                                        {this.state.minutes} <span>Minutes</span>
                                    </div>
                                    <div id="seconds" className="align-items-center flex-column d-flex justify-content-center">
                                        {this.state.seconds} <span>Seconds</span>
                                    </div>
                                </div>

                                <form className="newsletter-form">
                                    <div className="form-group">
                                        <input type="email" className="input-newsletter" placeholder="Enter your email" name="email" required />
                                        <span className="label-title">
                                            <i className='bx bx-envelope'></i>
                                        </span>
                                    </div>
                                    
                                    <button type="submit" className="default-btn">Subscribe</button>

                                    <p>If you would like to be notified when your app is live, Please subscribe to our mailing list.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ComingSoon;