import React, { Component } from 'react';

class EditProductModal extends Component {

    state = {
        modal: false
    };

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
                            <h3>Edit Product</h3>

                            <form>
                                <div className="form-group">
                                    <label>Upload your Product image here</label>

                                    <div className="upload-img">
                                        <span>
                                            <i className='bx bxs-image-add'></i>
                                            Click here or drop files to upload 
                                        </span>

                                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                </div>

                                <h4 className="title">Add your Product description and necessary information from here</h4>
                                
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" id="product-name" />
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea className="form-control" id="description" rows="3"></textarea>
                                </div>

                                <div className="form-group">
                                    <label>Unit</label>
                                    <input type="text" className="form-control" id="product-unit" />
                                </div>

                                <div className="form-group">
                                    <label>Price</label>
                                    <input type="number" className="form-control" id="product-price" />
                                </div>

                                <div className="form-group">
                                    <label>Sale Price</label>
                                    <input type="number" className="form-control" id="product-sale-price" />
                                </div>

                                <div className="form-group">
                                    <label>Discount In Percent</label>
                                    <input type="number" className="form-control" id="product-discount-price" />
                                </div>

                                <div className="form-group">
                                    <label>Product Quantity</label>
                                    <input type="number" className="form-control" id="product-quantity" />
                                </div>

                                <div className="form-group">
                                    <label>Product</label>
                                    <select className="form-control" id="product-type">
                                        <option>Product Type</option>
                                        <option>T-Shirt</option>
                                        <option>Bags</option>
                                        <option>Shoes</option>
                                        <option>Women Clothes</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Categories</label>
                                    <select className="form-control" id="product-categories">
                                        <option>Product Categories</option>
                                        <option>Arts & Crafts</option>
                                        <option>Baby</option>
                                        <option>Books</option>
                                        <option>Computers</option>
                                        <option>Electronics</option>
                                        <option>Women's Fashion</option>
                                        <option>Men's Fashion</option>
                                    </select>
                                </div>

                                <div className="modal-btn">
                                    <div className="btn optional-btn float-left" onClick={this.closeModal}>Cancel</div>
                                    <button type="submit" className="btn default-btn float-right">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default EditProductModal;