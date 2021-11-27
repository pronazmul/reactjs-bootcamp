import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import NavMenu from '../../Shared/NavMenu'
import Footer from '../../Shared/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

const NotificationPage = () => {
    document.title = 'Notification page'
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const [modalStatus, setModalStatus] =useState(false)
    return (
        <>
            <NavMenu />
            <Container style={{ marginTop: '75px' }}>
                <Row>

                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className='p-0 pr-2 py-1'>
                        <Card className='shadow notificatoin-grow-up' onClick={()=>setModalStatus(true)}>
                            <Card.Body>
                                <p className='card-title text-left'>This is Notification Heading</p>
                                <p className='footer-text text-primary'><FontAwesomeIcon icon={faBell} /> 21/01/2020 | Status: Unread</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className='p-0 pr-2 py-1'>
                        <Card className='shadow notificatoin-grow-up' onClick={()=>setModalStatus(true)}>
                            <Card.Body>
                                <p className='card-title text-left'>This is Notification Heading</p>
                                <p className='footer-text text-primary'><FontAwesomeIcon icon={faBell} /> 21/01/2020 | Status: Unread</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className='p-0 pr-2 py-1'>
                        <Card className='shadow notificatoin-grow-up' onClick={()=>setModalStatus(true)}>
                            <Card.Body>
                                <p className='card-title text-left'>This is Notification Heading</p>
                                <p className='footer-text text-primary'><FontAwesomeIcon icon={faBell} /> 21/01/2020 | Status: Unread</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className='p-0 pr-2 py-1'>
                        <Card className='shadow notificatoin-grow-up' onClick={()=>setModalStatus(true)}>
                            <Card.Body>
                                <p className='card-title text-left'>This is Notification Heading</p>
                                <p className='footer-text text-primary'><FontAwesomeIcon icon={faBell} /> 21/01/2020 | Status: Unread</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className='p-0 pr-2 py-1'>
                        <Card className='shadow notificatoin-grow-up' onClick={()=>setModalStatus(true)}>
                            <Card.Body>
                                <p className='card-title text-left'>This is Notification Heading</p>
                                <p className='footer-text text-primary'><FontAwesomeIcon icon={faBell} /> 21/01/2020 | Status: Unread</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className='p-0 pr-2 py-1'>
                        <Card className='shadow notificatoin-grow-up' onClick={()=>setModalStatus(true)}>
                            <Card.Body>
                                <p className='card-title text-left'>This is Notification Heading</p>
                                <p className='footer-text text-primary'><FontAwesomeIcon icon={faBell} /> 21/01/2020 | Status: Unread</p>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                <Modal show={modalStatus} onHide={()=>setModalStatus(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>This is modal Header</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='footer-text'>When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>setModalStatus(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={()=>setModalStatus(false)}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            <Footer />
        </>

    )
}

export default NotificationPage