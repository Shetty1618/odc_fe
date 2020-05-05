import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import "../styles/header.css";

class FirstDayInOffice extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <h5 className="text-center">Create FDO request</h5>
        <hr></hr>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="aricentEmpId">
              <Form.Control type="text" placeholder="Aricent Emp id" />
            </Form.Group>
            <Form.Group as={Col} controlId="aricentMailId">
              <Form.Control type="email" placeholder="Aricent email ID" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="fName">
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="lName">
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="dob">
              <Form.Control type="text" placeholder="DOB(MM/DD/YY)" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="IdType">
              <Form.Control as="select" value="">
                <option>Select ID Type...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="citizenship">
              <Form.Control as="select" value="">
                <option>Select Citizenship Country...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="IdNumber">
              <Form.Control type="text" placeholder="ID Number" />
            </Form.Group>
            <Form.Group as={Col} controlId="fullName">
              <Form.Control
                type="text"
                placeholder="Name as mentioned in Gov id"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="wwid">
              <Form.Control type="text" placeholder="WWID" />
            </Form.Group>
            <Form.Group as={Col} controlId="location">
              <Form.Control as="select" value="">
                <option>Select Location...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="site">
              <Form.Control as="select" value="Choose...">
                <option>Select Site...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="projectName">
              <Form.Control type="text" placeholder="Project Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="projectId">
              <Form.Control type="text" placeholder="Project CWOS ID" />
            </Form.Group>
            <Form.Group as={Col} controlId="projectStartDate">
              <Form.Control type="text" placeholder="Project Start date" />
            </Form.Group>
            <Form.Group as={Col} controlId="projectEndDate">
              <Form.Control type="text" placeholder="Project Start date" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="skills">
            <Form.Label>Skills</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="fullName">
              <Form.File
                id="custom-file-translate-scss"
                label="Attach signed NDA document"
                lang="en"
                custom
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="sponsorName">
              <Form.Control type="text" placeholder="Sponsor Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="fullName">
              <Form.File
                id="custom-file-translate-scss"
                label="Attach sponsor approval Email (.msg)"
                lang="en"
                custom
              />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default FirstDayInOffice;
