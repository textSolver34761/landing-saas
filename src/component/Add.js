import React from 'react';
//import axios from 'axios';

export default class Add extends React.Component {
  state = {
    message: ''
  }

  handleChange = event => {
    this.setState({ message: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const message = {
      message: this.state.message
    };

    /*axios.post(`https://jsonplaceholder.typicode.com/users`, { message })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })*/
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <div>Edit the Welcome Message</div>
                    <textarea name="message" rows="5" cols="40" onChange={this.handleChange}></textarea>
                </label>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
  }
}