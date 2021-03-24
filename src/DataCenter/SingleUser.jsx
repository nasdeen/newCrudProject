import React, { useState } from "react";
import { Card, Button, Col, Modal } from "react-bootstrap";
import EditSingleUser from "./EditSingleUser";

const SingleUser = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemove = (e) => {
    e.preventDefault();
    props.removeUser(props.userInfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditSingleUser
            userInfo={props.userInfo}
            editUser={props.editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>
      <Col md="4" style={{ marginBottom: "1rem" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Mankwaa-Family
            </Card.Subtitle>
            <Card.Title>{props.userInfo.name}</Card.Title>
            <Card.Text>
              <p>Email: {props.userInfo.email}</p>
              <p>Age: {props.userInfo.age}</p>
            </Card.Text>
            <Card.Link href="#" onClick={handleShow}>
              Edit
            </Card.Link>
            <Card.Link href="#">
              <Button size="sm" variant="danger" onClick={handleRemove}>
                Delete
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleUser;
