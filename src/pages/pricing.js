import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
export const Pricing = () =>{
    return (
        <>
        <h1>Pricing</h1>
        <Container className="wrapper">
            <Card className="first" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Individuals</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>
                                Features
                            </li>
                            <li>
                                Features
                            </li>
                        </ul>
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>
            
            <Card className="second" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Compangnies</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>
                                Features ++
                            </li>
                            <li>
                                Features ++
                            </li>
                        </ul>
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>

            <Card className="third" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Personnalized</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>
                                Features +++
                            </li>
                            <li>
                                Features +++
                            </li>
                        </ul>
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>
        </Container>
        </>
    );
}