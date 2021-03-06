import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import StarRating from './StarRating';

function Product({product}) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product.id}`}>
                <Card.Img src={product.image} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.id}`} className="product-name">
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <div className="my-3" style={{display: "inline-block"}}>
                        <StarRating star={product.rating} totalReviews={product.total_reviews} /> 
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
