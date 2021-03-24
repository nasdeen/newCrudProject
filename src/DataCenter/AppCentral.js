import React, { Component } from "react";
import { Container, fluid, Col, Row } from "react-bootstrap";
import AddSingleUser from "./AddSingleUser";
import AllUsers from "./AllUsers";

class AppCentral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Nasirudeen Enusah",
          email: "nasdeen@nas.com",
          gender: "Male",
          age: "36",
          id: "reetryfgjkhkkbjcg",
        },
        {
          name: "Aminata Nasirudeen",
          email: "amina@nas.com",
          gender: "Female",
          age: "33",
          id: "e468970hif58900",
        },
        {
          name: "Ubaida Inusah",
          email: "ubai@nas.com",
          gender: "Female",
          age: "30",
          id: "gfcbnzas144890--0",
        },
        {
          name: "Ayisha Inusah",
          email: "ayisha@nas.com",
          gender: "Female",
          age: "63",
          id: "oiopou77889-=0ucfd",
        },
      ],
    };
  }
  addNewUser = (user) => {
    // lets add a new ID to user
    user.id = Math.random().toString();
    this.setState({ users: [...this.state.users, user] });
  };

  deleteUser = (id) => {
    let nonDeletedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: nonDeletedUsers,
    });
    // console.log("item deleted");
  };
  editUser = (id, userUpdate) => {
    let updateAccount = this.state.users.map((user) =>
      user.id === id ? userUpdate : user
    );
    this.setState({
      users: updateAccount,
    });
  };

  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <AddSingleUser addNewUser={this.addNewUser} />
            </Col>
            <Col>
              <AllUsers
                userData={this.state.users}
                editUser={this.editUser}
                userDelete={this.deleteUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AppCentral;
