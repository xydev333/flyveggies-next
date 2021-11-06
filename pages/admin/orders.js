import React, { Component } from 'react';
import TopNavbar from '../../components/Admin/TopNavbar';
import LeftSidebar from '../../components/Admin/LeftSidebar';
import withAuth from '../../helpers/withAuth';
import OrdersTable from '../../components/Admin/orders/OrdersTable';

class Orders extends Component {
    render() {
        return (
            <React.Fragment>
                <TopNavbar />
                <LeftSidebar />
 
                <OrdersTable />
            </React.Fragment>
        );
    }
}

export default withAuth(Orders);