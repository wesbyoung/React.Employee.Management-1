import React, { Component } from 'react'
import ProductList from '../components/ProductList'

export default class Martketplace extends Component {
    
    constructor() {
        // const product =this.props.product
        // console.log(products)
        
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        fetch('https://flaskbook-api.herokuapp.com/api/shop')
            .then(res => res.json())
            .then(data => this.setState({ products : data }))
    }

    render() {
        let products = this.state.products
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <figure className="card card-product">
                                {products ? products.map(product => (
                                    <ProductList products={this.props.products} key={product.id} handleAddToCart={this.props.handleAddToCart} /> )
                                ): null}
                         </figure>
                    </div>
                </div>
            </div>
        )
    }
}
