import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Button, Card, Form } from "react-bootstrap";
import StarRating from "../components/StarRating";
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { singleProduct } from '../actions/productActions';

function ProductDetail(props) {
  const [quantity, setQuantity] = useState(1)
  const productDetail = useSelector(state => state.productDetail);
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const { loading, fetchError, product } = productDetail;
  useEffect(() => {
    dispatch(singleProduct(productId));
  }, [dispatch, productId]);

  const handleAddingCart = () => {
    props.history.push(`/cart/${productId}?quantity=${quantity}`)
  };
  return (
    <div>
      <h1>Latest Products</h1>
      {loading
        ? <LoadingBox></LoadingBox>
        : fetchError
          ? <MessageBox variant="danger">{fetchError}</MessageBox>
          : (<div>
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
                    <StarRating star={product.rating} totalReviews={product.total_reviews} />
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
                    {product.stock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col>Quantity</Col>
                          <Col xs='auto' className='my-1'>
                            <Form.Control
                              as="select"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                            >
                              {
                                [...Array(Math.min(product.stock, 10)).keys()].map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))
                              }
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                      <Button
                      onClick={handleAddingCart}
                        className="btn-block"
                        disabled={product.stock === 0}
                        type="button"
                      >
                        Add to Cart
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </div>)
      }
    </div>

  );
}

export default ProductDetail;
