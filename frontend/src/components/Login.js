import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { login } from '../actions/userActions'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const redirect = props.location.search 
        ? props.location.search.split('=')[1] 
        : '/'

    const {error, loading, user} = useSelector(state => state.userLogin);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    useEffect(() => {
        if (user) {
            props.history.push(redirect)
        }
    }, [user, props.history, redirect])

    return (
        <Container >
            <Row className='py-3 justify-content-md-center'>
                <Col xs={12} md={6} lg={4}>
                <h1>Sign In</h1>
            {error && <MessageBox variant='danger'>{error}</MessageBox>}
            {loading && <LoadingBox />}
            <Form onSubmit={handleSubmit}>

                <Form.Group size="lg" controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Form.Group size="lg" controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className="mb-2">
                    Sign In
                </Button>
            </Form>
                    New Customer? {/*<Link
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                        </Link>*/}
                </Col>
            </Row>

        </Container>
    )
}

export default Login
