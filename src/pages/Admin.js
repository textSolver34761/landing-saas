import React from "react";
//import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";

export default class Admin extends React.Component {
    constructor(){
        super();
        this.state = {
            message: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    /*componentDidMount(event) {
      axios.post(`http://localhost:8080/save-welcome`).then((res) => {
        //const message = event.target.value //= res.data;
        //this.setState({ message });
        //console.log(message);
      });
    }*/

    render(){
        return(
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Edit the Welcome Message</Form.Label>
                        <Form.Control as="textarea" rows="5" name="message" onChange={this.handleInputChange} />
                    </Form.Group>
                </Form>
                <Button variant="primary">Save</Button>
            </div>
        )  
    }
}