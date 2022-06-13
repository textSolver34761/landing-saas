import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
export default class Welcome extends React.Component {
  state = {
    message: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8080`).then((res) => {
      const message = res.data;
      this.setState({ message });
    });
  }
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>
              <h1> Welcome </h1>
            </Card.Title>
            <Card.Text>
              {this.state.message.map((message) => (
                <span key={message.id}>{message.welcome}</span>
              ))}
            </Card.Text>
            <Button variant="primary" as={Link} to="/price">
              Go to pricing
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}