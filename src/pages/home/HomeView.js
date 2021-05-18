import React from 'react';
import Menu from '../../components/shared/menu/Menu'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'

export default function HomeView(props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col >
                    <Menu></Menu>
                </Col>
            </Row>
            <Row>
                <Col sm="3" className="mt-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Nome Restaurante</Card.Title>
                            <Button variant="primary">Ver produtos</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


