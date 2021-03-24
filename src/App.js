import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, fluid, Row, Col } from "react-bootstrap";
import Users from "./Components/Users";
import AddUserForm from "./Components/AddUserForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Nasirudeen Enusah",
          email: "nas@nas.com",
          gen: 1,
          id: "545567678yuih",
        },
        {
          name: "Amina Nasirudeen",
          email: "amina@amina.com",
          gen: 2,
          id: "fgfdgrd454657",
        },
        {
          name: "Ayisha Inusah",
          email: "ayisha@ayisha.com",
          gen: 3,
          id: "uyt567-fhhj097",
        },
        {
          name: "Alidu Inusah",
          email: "ali@ali.com",
          gen: 5,
          id: "aqeryhgvcbvnh456",
        },
        {
          name: "ubaida Inusah",
          email: "ubai@ubai.com",
          gen: 5,
          id: "9880p0khjyf3-u",
        },
      ],
    };
  }

  addNewUser = (user) => {
    //lets append the id
    user.id = Math.random().toString();

    this.setState({ users: [...this.state.users, user] });
  };

  deleteUser = (id) => {
    let nonDeleteUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: nonDeleteUsers,
    });
  };

  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === id ? updatedUser : user
      ),
    });
  };

  render() {
    return (
      <div>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <h4>Add User</h4>
              <br />
              <AddUserForm addUser={this.addNewUser} />
            </Col>
            <Col>
              <h4>Codetrain Users</h4>
              <br />
              <Users
                userData={this.state.users}
                userIdDelete={this.deleteUser}
                editUser={this.editUser}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
