import React from 'react'
import axios from 'axios'
import Product from "../components/products/Product";
import Jumbotron from "../components/products/Jumbotron";
import NewProductForm from "../components/products/NewProductForm";
import PropTypes from "prop-types";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount = () => {
        this.loadProductsFromServer();
    }

    loadProductsFromServer = () => {
        axios
            .get('/api/v1/products.json')
            .then(response => {
                const {products} = response.data;
                this.setState({products});
            })
            .catch(error => {
                console.error(error.response.data);
            });
    }

    handleProductSubmit = (data) => {
        const newProduct = {
            product: {...data}
        }

        axios.post('/api/v1/products.json', newProduct)
            .then(response => {
                this.setState({
                    products: [...this.state.products, response.data.product]
                })
            }).catch(error => {
                console.error(error);
        })
    }

    render() {
        return (
            <>
                <Jumbotron/>
                <NewProductForm onSubmit={this.handleProductSubmit}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-2">
                            <div className="row">
                                <div className="card-deck">
                                    {
                                        this.state.products.map((product) =>
                                            <Product key={product.id} {...product} />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

NewProductForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default ProductList;