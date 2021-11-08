import '../styles.scss';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/_App/Layout';
import { checkUserLogin, addProducts } from '../store/actions/cartActions';
import { AuthProvider } from '../context/AuthContext'

const MyApp = ({Component, pageProps, store}) => {
    React.useEffect(() => {
        store.dispatch(checkUserLogin())
        store.dispatch(addProducts())
    });
    return (
        <Layout>
            <ToastContainer />
            <AuthProvider>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </AuthProvider>
        </Layout>
    );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if(Component.getInitialProps){
        pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
};


export default withRedux(initStore)(MyApp)