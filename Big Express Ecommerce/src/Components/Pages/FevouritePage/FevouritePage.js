import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row} from 'react-bootstrap'
import NavMenu from '../../Shared/NavMenu'
import Footer from '../../Shared/Footer/Footer'
import image from '../../../Assets/Images/bag.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const FevouritePage = () => {
    document.title = 'Fevourite Page'    
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <>
            <NavMenu />
            <Container fluid={true} style={{ marginTop: '75px' }}>
            <h1 className='section-title'>Fevourite Collection</h1>
                <p className='section-subtitle'>This is Your Collection, You May Like</p>
                <Row>

                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title m-0'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                                <Button className='btn-block btn-danger btn-sm'><FontAwesomeIcon icon={faTrash}/>  Remove</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title m-0'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                                <Button className='btn-block btn-danger btn-sm'><FontAwesomeIcon icon={faTrash}/>  Remove</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title m-0'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                                <Button className='btn-block btn-danger btn-sm'><FontAwesomeIcon icon={faTrash}/>  Remove</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title m-0'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                                <Button className='btn-block btn-danger btn-sm'><FontAwesomeIcon icon={faTrash}/>  Remove</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title m-0'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                                <Button className='btn-block btn-danger btn-sm'><FontAwesomeIcon icon={faTrash}/>  Remove</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title m-0'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                                <Button className='btn-block btn-danger btn-sm'><FontAwesomeIcon icon={faTrash}/>  Remove</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} className='px-1 py-2'>
                        <Card className="grow-up-image shadow">
                            <Card.Img src={image} />
                            <Card.Body className='text-center'>
                                <p className='card-title m-0'>This Is Product Name</p>
                                <Card.Text className='card-price'>Price: 200 Taka</Card.Text>
                                <Button className='btn-block btn-danger btn-sm'><FontAwesomeIcon icon={faTrash}/>  Remove</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                   

                </Row>
            </Container>
            <Footer />
        </>

    )
}

export default FevouritePage