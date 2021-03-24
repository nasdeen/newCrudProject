import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class EditUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.userInfo.name,
      email: props.userInfo.email,
      gen: props.userInfo.gen,
      id: props.userInfo.id,
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editUser(this.state.id, this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
    this.props.closeModal(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter Your Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={this.state.email}
            placeholder="Enter email"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Gen</Form.Label>
          <Form.Control
            name="gen"
            type="number"
            value={this.state.gen}
            placeholder="Gen"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default EditUserForm;
