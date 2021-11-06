import React, { Component } from 'react';
import OrdersTable from './orders/OrdersTable';

class RecentOrders extends Component {
    render() {
        return (
			<React.Fragment>
				<OrdersTable />
			</React.Fragment>
        );
    }
}

export default RecentOrders;