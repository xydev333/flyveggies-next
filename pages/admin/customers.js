import React, { Component } from 'react';
import TopNavbar from '../../components/Admin/TopNavbar';
import LeftSidebar from '../../components/Admin/LeftSidebar';
import withAuth from '../../helpers/withAuth';

import { firebase } from '../../firebase';
import CustomersTR from '../../components/Admin/customers/CustomersTR';

class Customers extends Component {

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

    render() {
        const { ordersData, loading } = this.state;
        return (
            <React.Fragment>
                <TopNavbar />
                <LeftSidebar />
 
                <div className="admin-main-content d-flex flex-column">
                    <div className="page-header">
                        <h2>Customers</h2>
                    </div>

                    <div className="admin-table height-555">
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Customers</th>
                                        <th>Contact</th>
                                        <th>Total Order</th>
                                        <th>Total Amount</th>
                                        <th>Joining Date</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    { loading ? <CustomersTR orders={ordersData} /> : 'Loading...' }
                                     
                                </tbody>
                            </table>
                        </div> 
                    </div>
                   
                   {/* Footer */}
                   <div className="flex-grow-1"></div>
                </div>
            </React.Fragment>
        );
    }
}


export default withAuth(Customers);