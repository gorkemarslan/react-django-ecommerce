import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import StarRating from "../components/StarRating";
import axios from "axios";

function ProductDetail(props) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function getProduct() {
      const { data } = await axios.get(
        `/api/products/${props.match.params.id}`
      );
      setProduct(data);
    }
    getProduct();
    // TODO Add Product not found
  }, []);
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        {" "}
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <StarRating star={product.rating} /> {`(${product.numReviews})`}
            </ListGroup.Item>

            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.stock > 0 
                    ? (<span style={{ color: "green" }}>In Stock</span>) 
                    : (<span style={{ color: "red" }}>Out of Stock</span>)}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  disabled={product.countInStock === 0}
                  type="button"
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetail;
