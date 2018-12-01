import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentApplyForm from './components/student_apply.js';
import CompanyRecruitmentForm from './components/company_recruitment_form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        	<StudentApplyForm></StudentApplyForm>
        	<CompanyRecruitmentForm></CompanyRecruitmentForm>
        </header>        
      </div>
    );
  }
}

export default App;
