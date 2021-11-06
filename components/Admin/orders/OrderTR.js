import React, { Component } from 'react';

class OrderTR extends Component {
    state = {
        orderUpdateModal: true
    };

    toggleOrderUpdateModal = () => {
        this.setState({
            orderUpdateModal: !this.state.orderUpdateModal
        });
        this.props.onOrderModal(this.state.orderUpdateModal)
    }

    passId = (orderId) => {
        this.props.onPassId(orderId)
    }

    convertDateTime = (d) => {
        let t = new Date(1970, 0, 1);
        let time = t.setSeconds(d.seconds);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(time);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(time);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(time);
        return `${da}-${mo}-${ye}`;
    }

    statusBtn = (status) => {
        if(status === 'pending'){
            return <span className="badge badge_warning">Pending</span>;
        } else if (status === 'cancel'){
            return <span className="badge badge_danger">Cancel</span>;
        } else {
            return <span className="badge badge_success">Delivered</span>;
        }
    }
    render() {
        let { orders } = this.props;
        return (
            <React.Fragment>
                {
                    orders.map((order, i) => {
                        return(
                            <tr key={i} onClick={e => {
                                this.toggleOrderUpdateModal();
                                this.passId(order.id);
                            }}>
                                <td><strong>#{order.id}</strong></td>
                                <td>{this.convertDateTime(order.createdAt)}</td>
                                <td>{order.customerDetails.address}</td>
                                <td>${order.amount}</td>
                                <td>Stripe</td>
                                <td>{order.customerDetails.phone}</td>
                                <td>
                                    {this.statusBtn(order.status)}
                                </td>
                            </tr>
                        )
                    })
                }
            </React.Fragment>
        );
    }
}

export default OrderTR;