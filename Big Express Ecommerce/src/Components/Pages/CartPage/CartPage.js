import React, { useEffect } from 'react'
import { Button, ButtonGroup, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import NavMenu from '../../Shared/NavMenu'
import Footer from '../../Shared/Footer/Footer'
import image from '../../../Assets/Images/bag.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

const CartPage = () => {
    document.title = 'Cart'
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <>
            <NavMenu />
            <Container fluid={true} style={{ marginTop: '75px' }}>
                <h1 className='section-title'>Proced To Checkout</h1>
                <p className='section-subtitle'>Total Price 1000 BDT | Total Item 5</p>
                <Button className='d-block mx-auto btn-danger'><FontAwesomeIcon icon={faCartPlus} /> Checkout</Button>
                <Row className='mt-3'>

                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title m-0'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                                <Row>
                                    <Col md={6} className='p-0'>
                                        <Button className='btn-block' variant="danger"><FontAwesomeIcon icon={faTrash} size='1x' /></Button>
                                        </Col>
                                    <Col md={6} className='p-0'>
                                        <Form>
                                            <Form.Control className='text-center' type='number' placeholder='5' />
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title m-0'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                                <Row>
                                    <Col md={6} className='p-0'>
                                        <Button className='btn-block' variant="danger"><FontAwesomeIcon icon={faTrash} size='1x' /></Button>
                                        </Col>
                                    <Col md={6} className='p-0'>
                                        <Form>
                                            <Form.Control className='text-center' type='number' placeholder='5' />
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title m-0'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                                <Row>
                                    <Col md={6} className='p-0'>
                                        <Button className='btn-block' variant="danger"><FontAwesomeIcon icon={faTrash} size='1x' /></Button>
                                        </Col>
                                    <Col md={6} className='p-0'>
                                        <Form>
                                            <Form.Control className='text-center' type='number' placeholder='5' />
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title m-0'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                                <Row>
                                    <Col md={6} className='p-0'>
                                        <Button className='btn-block' variant="danger"><FontAwesomeIcon icon={faTrash} size='1x' /></Button>
                                        </Col>
                                    <Col md={6} className='p-0'>
                                        <Form>
                                            <Form.Control className='text-center' type='number' placeholder='5' />
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title m-0'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                                <Row>
                                    <Col md={6} className='p-0'>
                                        <Button className='btn-block' variant="danger"><FontAwesomeIcon icon={faTrash} size='1x' /></Button>
                                        </Col>
                                    <Col md={6} className='p-0'>
                                        <Form>
                                            <Form.Control className='text-center' type='number' placeholder='5' />
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title m-0'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                                <Row>
                                    <Col md={6} className='p-0'>
                                        <Button className='btn-block' variant="danger"><FontAwesomeIcon icon={faTrash} size='1x' /></Button>
                                        </Col>
                                    <Col md={6} className='p-0'>
                                        <Form>
                                            <Form.Control className='text-center' type='number' placeholder='5' />
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title m-0'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                                <Row>
                                    <Col md={6} className='p-0'>
                                        <Button className='btn-block' variant="danger"><FontAwesomeIcon icon={faTrash} size='1x' /></Button>
                                        </Col>
                                    <Col md={6} className='p-0'>
                                        <Form>
                                            <Form.Control className='text-center' type='number' placeholder='5' />
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    


                </Row>
            </Container>
            <Footer />
        </>

    )
}

export default CartPage