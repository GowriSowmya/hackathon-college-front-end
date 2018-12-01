import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class StudentApplyForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Enter your name"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Enter your email id" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="phone">Phone Number</Label>
              <Input type="number" name="phone" id="phone" placeholder="Enter your phone number" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="prefer_city1">Preferred City: 1</Label>
              <Input type="text" name="prefer_city1" id="prefer_city1" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="prefer_city2">Preferred City: 2</Label>
              <Input type="text" name="prefer_city2" id="prefer_city2" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="prefer_city3">Preferred City: 3</Label>
              <Input type="text" name="prefer_city3" id="prefer_city3" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="inst">Education</Label>
              <Input type="text" name="inst" id="inst" placeholder="Enter your current Institute"/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="marks">Marks</Label>
              <Input type="number" name="marks" id="marks" placeholder="Enter your CGPA"/>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>Internship Experience</Label>
          <Row form>
            <Col md={6}>
              <Input type="text" name="c_name" id="c_name" placeholder="Enter the company name"/>
            </Col>
            <Col md={6}>
              <Input type="number" name="period" id="period" placeholder="Enter the number of months worked"/>
            </Col>
          </Row>
          <Row form>
            <Col>
              <Input type="text" name="desc" id="desc" placeholder="Enter your responsibilities"/>
            </Col>
            <Col>
              <Input type="text" name="tech" id="tech" placeholder="Enter the technologies used" />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Label>Project</Label>
          <Row form>
            <Col md={6}>
              <Input type="text" name="project" id="project" placeholder="Enter the Project name"/>
            </Col>
            <Col md={6}>
              <Input type="number" name="p_period" id="p_period" placeholder="Enter the number of months worked"/>
            </Col>
            <Col>
              <Input type="text" name="p_desc" id="p_desc" placeholder="Enter your responsibilities"/>
            </Col>
            <Col>
              <Input type="text" name="p_tech" id="p_tech" placeholder="Enter the technologies used"/>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Label for="skill">Skill</Label>
          <Input type="text" name="skill" id="skill" placeholder="Enter your technical skills"/>
        </FormGroup>
        <FormGroup>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>Check me out</Label>
        </FormGroup>
        <Button>Sign in</Button>
      </Form>
    );
  }
}

export default StudentApplyForm;
