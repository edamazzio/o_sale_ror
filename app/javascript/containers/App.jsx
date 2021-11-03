import React from 'react';
import Header from "../components/shared/Header";
import Jumbotron from "../components/products/Jumbotron";
import ProductList from "./ProductsContainer";
import Footer from "../components/shared/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import FourOFour from "../components/404";
import ProductDetail from "./ProductDetailContainer";
import NewProductForm from "../components/products/NewProductForm";

const App = () => (
    <BrowserRouter>
        <>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/products/:id" component={ProductDetail}/>
                    <Route component={FourOFour}/>
                </Switch>
                <Footer />
            </div>
        </>
    </BrowserRouter>
);

export default App;