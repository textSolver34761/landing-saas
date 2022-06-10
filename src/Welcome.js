import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Welcome() {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title><h1> Welcome </h1></Card.Title>
                    <Card.Text>
                        here you can download our software
                    </Card.Text>
                    <Button variant="primary">Go to pricing</Button>
                </Card.Body>
            </Card>
        </div>
    );
  }
  
  export default Welcome;