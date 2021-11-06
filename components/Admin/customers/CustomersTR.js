import React, { Component } from 'react';
import faker from 'faker';

class CustomersTR extends Component {
    convertDateTime = (d) => {
        let t = new Date(1970, 0, 1);
        let time = t.setSeconds(d.seconds);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(time);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(time);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(time);
        return `${da}-${mo}-${ye}`;
    }
    render() {
        let { orders } = this.props;
        return (
            <React.Fragment>
                {
                    orders.map((order, i) => {
                        return(
                            <tr key={i}>
                                <td><strong>#{i + 1}</strong></td>
                                <td className="customer">
                                    <img src={faker.image.avatar()} alt="Image" /> 
                                    {order.customerDetails.firstName + " " + order.customerDetails.lastName}
                                </td>
                                <td>{order.customerDetails.phone}</td>
                                <td>{Object.keys(order.items).length}</td>
                                <td>${order.amount}</td>
                                <td>{this.convertDateTime(order.createdAt)}</td>
                            </tr>
                        )
                    })
                }
                
            </React.Fragment>
        );
    }
}

export default CustomersTR;