import React, { Component } from 'react';
import { Container, Card, Row, CardImg, CardText, CardBody, Col,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import StudentApplyForm from './components/student_apply.js';
import CompanyRecruitmentForm from './components/company_recruitment_form.js';
import Header from './components/header.js'

class App extends Component {

  constructor(){
    super()
    this.state = {
      currentForm : "none"
    }
  }

  render() {
    return (
      	<div className="App">
	    <Header></Header>
	    <Container>
	    	<Row>
	    		<Col>
					<div>
				      <Card>
				        <CardImg top width="100%" src="https://www.tutorean.co.uk/bettertutor/wp-content/uploads/2017/11/students.jpg" alt="Card image cap" />
				        <CardBody>
				          <CardTitle>Card title</CardTitle>
				          <CardSubtitle>Card subtitle</CardSubtitle>
				          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				          <Button onClick={this.selectThisFunction} name="student">Button</Button>
				        </CardBody>
				      </Card>
			    	</div>
	    		</Col>
	    		<Col>
		    		<div>
				      <Card>
				        <CardImg top width="100%" src="https://alum.mit.edu/sites/default/files/slice/uploads/2017/07/Logo-square-2.jpg" alt="Card image cap" />
				        <CardBody>
				          <CardTitle>Card title</CardTitle>
				          <CardSubtitle>Card subtitle</CardSubtitle>
				          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				          <Button onClick={this.selectThisFunction} name="company">Button</Button>
				        </CardBody>
				      </Card>
			    	</div>
	    		</Col>							  
	    	</Row>      	
	    </Container>

        <header className="App-header">
        	<StudentApplyForm></StudentApplyForm>
        	<CompanyRecruitmentForm></CompanyRecruitmentForm>
        </header>        
      </div>
    );
  }
}

export default App;
