import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CompanyRecruitmentForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="com_name">Company Name</Label>
            <Input type="text" name="com_name" id="com_name" placeholder="Enter your compnay's name" />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="website">Website</Label>
              <Input type="text" name="website" id="website" placeholder="Enter your company's website" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="year">Year</Label>
              <Input type="text" name="year" id="year" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="com_desc">Description</Label>
          <Input type="text" name="com_desc" id="com_desc"/>
        </FormGroup>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="pos_avl">Position offered</Label>
              <Input type="text" name="pos_avl" id="pos_avl"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="pos_time">Starting date</Label>
              <Input type="date" name="pos_time" id="pos_time"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="pos_place">Place</Label>
              <Input type="text" name="pos_place" id="pos_place"/>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="pos_desc">City</Label>
          <Input type="text" name="pos_desc" id="pos_desc"/>
        </FormGroup>
        <FormGroup>
          <Label for="skill">Skills required</Label>
          <Input type="text" name="skill" id="skill"/>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>Check me out</Label>
        </FormGroup>
        <Button>Sign in</Button>
      </Form>
    );
  }
}

export default CompanyRecruitmentForm;
