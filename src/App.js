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
    this.myRef = React.createRef();

  }


  selectThisFunction = (event)=> {
  	console.log(event.target.name)
  	this.setState({
      currentForm : event.target.name
    })
    window.scrollTo(0, this.myRef.current.offsetTop)	
  }


  render() {
  	var formSelected;
  	if(this.state.currentForm == "student"){
  		formSelected = (<StudentApplyForm></StudentApplyForm>)
  	} else{
  		formSelected = (<CompanyRecruitmentForm></CompanyRecruitmentForm>)
  	}
    return (
      	<div className="App">
	    <Header></Header>
	    	<br /><br />
	    <Container>
	    	<Row>
	    		<Col>
					<div>
				      <Card>
				        <CardImg top height="150px" width="150px" src="https://media.giphy.com/media/l3vRlCJ9Pb2t0fJe0/giphy.gif" alt="Card image cap" />
				        <CardBody>
				          <CardTitle>Students Signup</CardTitle>
				          <CardSubtitle>Apply for internships in no time</CardSubtitle>
				          <CardText></CardText>
				          <Button onClick={this.selectThisFunction} name="student">Click here</Button>
				        </CardBody>
				      </Card>
			    	</div>
	    		</Col>
	    		<Col>
		    		<div>
				      <Card>
				        <CardImg top height="150px" width="150px" src="https://media.giphy.com/media/l3vRlCJ9Pb2t0fJe0/giphy.gif" alt="Card image cap" />
				        <CardBody>
				          <CardTitle>Company Registration</CardTitle>
				          <CardSubtitle>Find most suitable candidate for your company</CardSubtitle>
				          <CardText></CardText>
				          <Button onClick={this.selectThisFunction} name="company">Click here</Button>
				        </CardBody>
				      </Card>
			    	</div>
	    		</Col>							  
	    	</Row>      	
	    </Container>
			<br /><br />
        <header className="App-header">
        	<div  ref={this.myRef}>
        	<Container>
				{formSelected}        	
        	</Container>        	
        	</div>
        </header>        
      </div>
    );
  }
}

export default App;
