import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ExtraOne = () => {
    return (
        <div className='mt-5'>
            <h1>Top Collections</h1>
            <Container>
                
                <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                           
                            <Button variant="primary">See More</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                               
                                <Button variant="primary">See More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                               
                                <Button variant="primary">See More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ExtraOne;