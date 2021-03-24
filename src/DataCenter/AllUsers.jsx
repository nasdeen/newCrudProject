import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleUser from "./SingleUser";

const AllUsers = (props) => {
  return (
    <Container>
      <Row>
        {props.userData.map((user) => {
          return (
            <SingleUser
              userInfo={user}
              key={user.id}
              editUser={props.editUser}
              removeUser={props.userDelete}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default AllUsers;
