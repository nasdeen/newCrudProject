import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class EditSingleUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.userInfo.name,
      email: this.props.userInfo.email,
      age: this.props.userInfo.age,
      id: this.props.userInfo.id,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editUser(this.state.id, this.state);
    this.setState({
      name: "",
      email: "",
      age: "",
    });
    this.props.closeModal(this.state.id);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              name="age"
              type="number"
              placeholder="Enter Your Age Number e.g 36"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditSingleUser;
