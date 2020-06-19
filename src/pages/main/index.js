import React, { Component } from 'react';

import api from '../../services/api';

export default class Main extends Component {

    state = {
        products: []

    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get("/products");

        this.setState({ products: response.data.docs })

        console.log(response.data);
    };

    render(){
        return(
        <div className="product-list"> 

        {this.state.products.map(product => (
            <article key={product._id}>
                <strong> {product.title} </strong>
            <p>{product.description}</p>

            <a href=""> Acessar </a>
            </article>
        ))}

        <h1> Senhor, tira essa tristeza do meu coração </h1>
        
        </div>
         
         );
    }
}