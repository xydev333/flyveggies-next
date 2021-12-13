import React from 'react';
import Head from "next/head";
import GoTop from '../Shared/GoTop';

const Layout = ({children}) => {
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 2000);
    }, [])

    return(
        <React.Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Fly Veggies</title>
                <meta name="description" content="Flyveggies - Dispensery" />
                <meta name="og:title" property="og:title" content="Fly Veggies - Dispensery"></meta>
                <meta name="twitter:card" content="Flyveggies - Dispensery"></meta>
                <link rel="canonical" href="https://flyveggies.com/"></link>
                <meta property="og:image" content="https://flyveggies.com/flyimages/flyveggieslogo.png" />
            </Head>
            {loader ? 'Loading' : children}
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;