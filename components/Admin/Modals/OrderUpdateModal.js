import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { firebase } from '../../../firebase';

class OrderUpdateModal extends Component {

    state = {
        modal: false,
        selected: ''
    };

    handleUpdate = (e) => {
        e.preventDefault();
        if(this.state.selected === ''){
            return false;
        }
        const db = firebase.firestore();
        const dbOrderRef = db.collection('orders');
        dbOrderRef.doc(this.props.orderId).update({
            status: this.state.selected
        });
        toast.success('Status changed to' + " " + this.state.selected, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
        setTimeout(() => {
            this.closeModal();
            window.location.reload(false);
        }, 1000);
    }

    closeModal = () => {
        this.props.onClick(this.state.modal);
    }

    render() {
        return (
            <React.Fragment>
                <div className={`admin-product-modal ${this.props.active}`}> 
                    <div className="modal-innter-content">
                        <button type="button" className="close" onClick={this.closeModal}>
                            <span aria-hidden="true">
                                <i className='bx bx-x'></i>
                            </span>
                        </button>

                        <div className="modal-body">
                            <h3>Order Update</h3>

                            <form onSubmit={this.handleUpdate}>
                                <div className="form-group">
                                    <label>Order Status</label>
                                    <select 
                                        className="form-control" 
                                        id="product-type"
                                        onChange={e => this.setState({selected: e.target.value})}
                                    >
                                        <option>Select Option</option>
                                        <option value="delivered">Delivered</option>
                                        <option value="pending">Pending</option>
                                        <option value="cancel">Declined</option>
                                    </select>
                                </div>

                                <div className="modal-btn">
                                    <div className="btn optional-btn float-left" onClick={this.closeModal}>Cancel</div>
                                    <button className="btn default-btn float-right">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default OrderUpdateModal;