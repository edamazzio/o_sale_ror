import React from "react";
import {inputClasses} from "../../shared/helper";

class NewProductForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            price: '',
            quantity: '',
            errors: {}
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {errors, ...rest} = this.state;
        const newProduct = {...rest};
        this.props.onSubmit(newProduct);
        this.clearState();
    }

    clearState = () => {
        this.setState({
            name: '',
            description: '',
            price: '',
            quantity: '',
        })
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
        this.clearErrors(name, value);
    }

    clearErrors = (name, value) => {
        let errors = { ...this.state.errors };
        switch (name) {
            case "name":
            case "description": {
                if (value.length > 0)
                    delete errors[name];
                break;
            }
            case "price": {
                if (parseFloat(value) > 0.0 || value.match(/^\d+(\.\d{0,2})?$/))
                    delete errors[name];
                break;
            }
            case "quantity": {
                if (parseInt(value) > 0.0 || value.match(/^\d+$/))
                    delete errors[name];
                break;
            }
        }
        this.setState({errors}, () => {});
    }

    handleBlur = (event) => {
        const {name} = event.target;
        const fieldError = this.checkErrors(this.state, name);
        const errors = {...this.state.errors, ...fieldError}
        this.setState({ errors });
    }

    checkErrors = (state, fieldName) => {
        const error = {}

        switch (fieldName) {
            case 'description':
            case 'name': {
                if (!state[fieldName]) {
                    error[fieldName] = `Please provide a ${fieldName}`
                }
                break;
            }
            case 'price': {
                if (parseFloat(state.price) <= 0.0 || !state.price.toString().match(/^\d+(\.\d{0,2})?$/)) {
                    error[fieldName] = `Price has to be a positive number`
                }
                break;
            }
            case 'quantity': {
                if (parseInt(state.quantity, 10) <= 0.0 || !state.quantity.toString().match(/\d+$/)) {
                    error[fieldName] = `Quantity has to be a positive whole number`
                }
                break;
            }
        }

        return error;
    }

    render() {
        const buttonText = "Create Product"
        const title = "Add new Product"
        return (<div className="container mb-4">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card panel-div">
                        <h1 className="text-center form-header-style pt-2 pb-3">
                            {title}
                        </h1>

                        <div className="form-body-style px-5 pt-4">
                            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                                <div className="form-group row">
                                    <label htmlFor="name" className="col-md-3 col-form-label">Name</label>
                                    <div className="col-md-9">
                                        <input onBlur={this.handleBlur} value={this.state.name}
                                               onChange={this.handleChange} type="text"
                                               name="name" id="name" className={inputClasses("name", this.state)}
                                               placeholder="Item name" autoFocus />
                                        {
                                            this.state.errors.name
                                                ? <div className="invalid-feedback">{this.state.errors.name}</div>
                                            : null
                                        }

                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="quantity" className="col-md-3 col-form-label">Quantity</label>
                                    <div className="col-md-9">
                                        <input onBlur={this.handleBlur} value={this.state.quantity}
                                               onChange={this.handleChange} type="number"
                                               name="quantity" id="quantity" className={inputClasses("quantity", this.state)}
                                               placeholder="Item quantity"/>
                                        {
                                            this.state.errors.quantity
                                                ? <div className="invalid-feedback">{this.state.errors.quantity}</div>
                                                : null
                                        }
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="price" className="col-md-3 col-form-label">Price</label>
                                    <div className="col-md-9">
                                        <input onBlur={this.handleBlur} value={this.state.price}
                                               onChange={this.handleChange} type="text"
                                               name="price" id="price" className={inputClasses("price", this.state)}
                                               placeholder="Item price"/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="description" className="col-md-3 col-form-label">
                                        Description
                                    </label>
                                    <div className="col-md-9">
                                        <textarea onBlur={this.handleBlur} value={this.state.description}
                                                  onChange={this.handleChange}
                                                  name="description" id="description" className={inputClasses("description", this.state)}
                                                  placeholder="Item description here" rows="5" />
                                        {
                                            this.state.errors.description
                                                ? <div className="invalid-feedback">{this.state.errors.description}</div>
                                                : null
                                        }
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="image" className="col-md-3 col-form-label">Image</label>
                                    <div className="col-md-9">
                                        <input type="file" name="image" id="image" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-9 offset-md-3">
                                        <input type="submit" className="btn btn-outline-purple" value={buttonText}/>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default NewProductForm;