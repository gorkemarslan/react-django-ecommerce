import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

function Home() {
    const [products, setProducts] = useState([])
    const productList = useSelector(state => state.productList)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts())
    }, [])
    return (
        <div>
            <h1>Latest Products</h1>
                <Row>
                    {products.map((product) => (
                        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>

        </div>
    )
}

export default Home
