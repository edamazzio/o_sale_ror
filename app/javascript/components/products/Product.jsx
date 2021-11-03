import React from 'react'
import {Link} from "react-router-dom";

const Product = ({id, name, description, price, imageUrl}) => (
    <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={imageUrl}
                 alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">
                    <span className="badge badge-pill badge-purple float-right">{price}</span>
                    <Link to={`/products/${id}`}>{name}</Link>
                </h5>
                <p className="card-text">
                    {description}
                </p>
            </div>
        </div>
    </div>
);


export default Product;
