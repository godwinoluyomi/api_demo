import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, } from '@fortawesome/free-regular-svg-icons'
import { faGlobe, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const User = ({ name, username, email, phone, website, address, company }) => {
    return (
        <>

            <Card bg='light' className='mb-3 shadowBox'>
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> {username} </Card.Subtitle>
                    <Card.Text>
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#392467' }} /> {address.suite}, {address.street}, {address.city} - {address.zipcode}
                    </Card.Text>

                    <Row>
                        <Col xs={12} md={4}>
                            <FontAwesomeIcon icon={faPhone} style={{ color: '#392467' }} /> {phone}
                        </Col>
                        <Col xs={12} md={5}>
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: '#392467' }} /> {email}
                        </Col>

                        <Col xs={12} md={3}>
                            <FontAwesomeIcon icon={faGlobe} style={{ color: '#392467' }} /> {website}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default User