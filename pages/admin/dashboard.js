import React, { Component } from 'react';
import withAuth from '../../helpers/withAuth';
import LeftSidebar from '../../components/Admin/LeftSidebar';
import {firebase} from '../../firebase';
import LineChart from '../../components/Admin/LineChart';
import SalesInfo from '../../components/Admin/SalesInfo';
import MonthlyRevenue from '../../components/Admin/MonthlyRevenue';
import ProductTrendsByMonth from '../../components/Admin/ProductTrendsByMonth';
// import RecentOrders from '../../components/Admin/RecentOrders';

class Dashboard extends Component {
    state = {
        ordersData: [],
        loading: true
    };
    componentDidMount(){
        const db = firebase.firestore();
        const dbOrderRef = db.collection('orders');
        let orderArray = [];
        dbOrderRef.get()
        .then(res => {
            res.forEach(doc => {
                let orderObj = doc.data();
                orderObj.id = doc.id;
                orderArray.push(orderObj)
            });
            this.setState({
                ordersData: orderArray
            })
            this.loading = false;
        })
        .catch(err => {
            console.log('error', err)
        });
    }
    render(){
        const chart = this.state.ordersData.length ? <LineChart data={this.state.ordersData} /> : null;
        return(
            <React.Fragment>
                <LeftSidebar />
                  
                <div className="admin-main-content d-flex flex-column">
                    <div className="page-header">
                        <h2>Dashboard</h2>
                    </div>
                    <SalesInfo />
                    <MonthlyRevenue />
                    <ProductTrendsByMonth />
                    {chart}
                    {/* <RecentOrders /> */}
                   
                   {/* Footer */}
                   <div className="flex-grow-1"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default withAuth(Dashboard);