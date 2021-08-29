import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { listProducts } from '../actions/productActions';

function Home() {
    const productList = useSelector(state => state.productList);
    const { loading, fetchError, products} = productList;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <div>
            <h1>Latest Products</h1>
            {loading
                ? <LoadingBox></LoadingBox>
                : fetchError
                    ? <MessageBox variant="danger">{fetchError}</MessageBox>
                    : (<Row>
                        {products ? products.map((product) => (
                            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        )) : null}
                    </Row>)
            }
        </div>
    )
}

export default Home
