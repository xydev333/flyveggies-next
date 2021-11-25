import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { firebase } from '../../../firebase';
import axios from 'axios';

class AddProductModal extends Component {

    state = {
        modal: false,
        imageUrl: '',
        imageHoverUrl: '',
        progress: 0,
        title: '',
        type: 'T-Shirt',
        description: '',
        offer: true,
        oldPrice: 0,
        newPrice: 0,
        discount: true,
        discountOff: 0,
        onSale: true,
        newProduct: true,
        previewImage: null,
        previewImageHover: null
    };

    baseState = this.state 
    resetForm = () => {
        this.setState(this.baseState)
    }

    closeModal = () => {
        this.props.onClick(this.state.modal);
    }

    handleChange = (e) => {
        if(e.target.files[0]){
            let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => {
                // console.log(reader.result);
                this.setState({ previewImage: reader.result})
            }
            this.handleUpload(image);
        }
    }

    handleChangeHover = (e) => {
        if(e.target.files[0]){
            let imageHover = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(imageHover);
            reader.onload = () => {
                // console.log(reader.result);
                this.setState({ previewImageHover: reader.result})
            }
            this.handleUploadHover(imageHover);
        }
    }

    handleUpload = (image) => {
        const data = new FormData();
        if ( image ) {
            data.append( 'productImage', image, image.name );
            axios.post( '/api/upload', data, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            })
            .then( ( response ) => {
                if ( 200 === response.status ) {
                    // If file size is larger than expected.
                    if( response.data.error ) {
                        if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
                            alert( 'Max size: 2MB' );
                        } else {
                            console.log( response.data );
                            // If not the given file type
                            alert( response.data.error );
                        }
                    } else {
                        // Success
                        let fileName = response.data;
                        this.setState({
                            imageUrl: fileName.location
                        })
                        console.log( 'fileName', fileName.location );
                        // alert( 'File Uploaded', '#3089cf' );
                    }
                }
            }).catch( ( error ) => {
                // If another error
                alert( error, 'red' );
            });
        } else {
            // if file not selected throw error
            alert( 'Please upload file' );
        }
    }

    handleUploadHover = (imageHover) => {
        const data = new FormData();
        if ( imageHover ) {
            data.append( 'productImageHover', imageHover, imageHover.name );
            axios.post( '/api/upload-hover', data, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            })
            .then( ( response ) => {
                if ( 200 === response.status ) {
                    // If file size is larger than expected.
                    if( response.data.error ) {
                        if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
                            alert( 'Max size: 2MB' );
                        } else {
                            console.log( response.data );
                            // If not the given file type
                            // alert( response.data.error, 'red' );
                        }
                    } else {
                        // Success
                        let fileName = response.data;
                        this.setState({
                            imageHoverUrl: fileName.location
                        })
                        // console.log( 'fileName', fileName.location );
                        // alert( 'File Uploaded', '#3089cf' );
                    }
                }
            }).catch( ( error ) => {
                // If another error
                alert( error );
            });
        } else {
            // if file not selected throw error
            alert( 'Please upload file' );
        }
    }

    addProduct = (e) => {
        e.preventDefault();
        // console.log(this.state.imageUrl)
        let { 
            imageUrl, imageHoverUrl, 
            title, type, description, 
            offer, oldPrice, newPrice, 
            discount, discountOff, onSale, newProduct
        } = this.state;
        const product = {
            imageUrl: imageUrl,
            imageHoverUrl: imageHoverUrl,
            title: title,
            type: type,
            description: description,
            offer: Boolean(offer),
            oldPrice: Number(oldPrice),
            newPrice: Number(newPrice),
            discount: Boolean(discount),
            discountOff: Number(discountOff),
            onSale: Boolean(onSale),
            newProduct: Boolean(newProduct)
        };
        if(title != '' || imageUrl != '' || imageHoverUrl != ''){
            const db = firebase.firestore();
            const dbOrderRef = db.collection('products');
            dbOrderRef.add(product).then(() => {
                // this.props.resetCart();
                toast.success('Product has been created successfully.', {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                // setTimeout(() => {Router.push('/')},3000);  
                this.closeModal();
                this.resetForm()
            });
        } else {
            toast.error('Fillup the form', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }
    }

    render() {
        let { previewImage, previewImageHover } = this.state;
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
                            <h3>Add Product</h3>

                            <form onSubmit={this.addProduct}>
                                <div className="form-group">
                                    <label>Upload your Product image here</label>
                                    <div className="upload-img">
                                        <span>
                                            <i className='bx bxs-image-add'></i>
                                            Click here or drop files to upload 
                                        </span>

                                        <input 
                                            type="file" 
                                            className="form-control-file"
                                            name="productImage"
                                            accept="image/*"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    {
                                        previewImage ? (
                                        <div className="uploaded-img">
                                            <img src={previewImage} alt="Image" className="img-thumbnail" />
                                        </div>
                                        ) : null
                                    }
                                </div>
 
                                <div className="form-group">
                                    <label>Upload your Product hover image here</label>
                                    <div className="upload-img">
                                        <span>
                                            <i className='bx bxs-image-add'></i>
                                            Click here or drop files to upload 
                                        </span>

                                        <input 
                                            type="file" 
                                            className="form-control-file"
                                            name="productImageHover"
                                            onChange={this.handleChangeHover}
                                        />
                                    </div>

                                    {
                                        previewImageHover ? (
                                        <div className="uploaded-img">
                                            <img src={previewImageHover} alt="Image" className="img-thumbnail" />
                                        </div>
                                        ) : null
                                    }
                                </div>

                                

                                <h4 className="title">Add your Product description and necessary information from here</h4>
                                
                                <div className="form-group">
                                    <label>Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={this.state.title}
                                        onChange={e => this.setState({title: e.target.value})}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea 
                                        className="form-control" 
                                        value={this.state.description}
                                        onChange={e => this.setState({description: e.target.value})}
                                        rows="3"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Price</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        value={this.state.newPrice}
                                        onChange={e => this.setState({newPrice: e.target.value})}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Offer?</label>
                                    <select 
                                        className="form-control"
                                        onChange={e => this.setState({offer: e.target.value})}
                                    >
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Old Price</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        value={this.state.oldPrice}
                                        onChange={e => this.setState({oldPrice: e.target.value})}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>New Product?</label>
                                    <select 
                                        className="form-control"
                                        onChange={e => this.setState({newProduct: e.target.value})}
                                    >
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>On Sale?</label>
                                    <select 
                                        className="form-control"
                                        onChange={e => this.setState({onSale: e.target.value})}
                                    >
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Discount?</label>
                                    <select 
                                        className="form-control"
                                        onChange={e => this.setState({discount: e.target.value})}
                                    >
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Discount In Percent (1 or 10 ...)</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        value={this.state.discountOff}
                                        onChange={e => this.setState({discountOff: e.target.value})}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Product Type</label>
                                    <select 
                                        className="form-control" 
                                        onChange={e => this.setState({type: e.target.value})}
                                    >
                                        <option value="T-Shirt">T-Shirt</option>
                                        <option value="Bags">Bags</option>
                                        <option value="Shoes">Shoes</option>
                                        <option value="Women Clothes">Women Clothes</option>
                                        <option value="medical">Medical Equipment</option>
                                        <option value="grocery">Grocery</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="furniture">Furniture</option>
                                        <option value="jewelry">Jewelry</option>
                                    </select>
                                </div>

                                <div className="modal-btn">
                                    <div className="btn optional-btn float-left" onClick={this.closeModal}>Cancel</div>
                                    <button className="btn default-btn float-right">Create Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AddProductModal;