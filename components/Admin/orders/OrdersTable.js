import React, { Component } from 'react';
import OrderUpdateModal from '../Modals/OrderUpdateModal';
import { firebase } from '../../../firebase';
import OrderTR from '../orders/OrderTR';

class OrdersTable extends Component {
    state = {
        ordersData: [],
        loading: true,
        orderUpdateModal: false,
        orderId: ''
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

    toggleOrderUpdateModal = (e) => {
        this.setState({
            orderUpdateModal: e
        });
    }

    closeOrderUpdateModal = () => {
        this.setState({
            orderUpdateModal: false
        });
    }

    getId = (e) => {
        this.setState({
            orderId: e
        });
    }
    render() {
        const { ordersData, loading } = this.state;
        return (
            <div className="admin-main-content d-flex flex-column">
                <div className="page-header">
                    <h2>Orders</h2>
                </div>

                <div className="admin-table admin-orders-table height-555">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr>
                                    <th>Customer ID</th>
                                    <th>Date</th>
                                    <th>Delivery Address</th>
                                    <th>Amount</th>
                                    <th>Payment Method</th>
                                    <th>Contact</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                { loading ? <OrderTR 
                                    onOrderModal={this.toggleOrderUpdateModal} 
                                    onPassId={this.getId}
                                    orders={ordersData} /> : 'Loading...' }

                            </tbody>
                        </table>
                    </div> 
                </div>

                <OrderUpdateModal
                    onClick={this.closeOrderUpdateModal} 
                    orderId={this.state.orderId}
                    active={this.state.orderUpdateModal ? 'active' : ''} 
                />
                
                {/* Footer */}
                <div className="flex-grow-1"></div>
            </div>
        );
    }
}

export default OrdersTable;