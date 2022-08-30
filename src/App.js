import React, { Component } from 'react';
import { AboutMe, WorkExperience } from './components/InputHandler';
import { Header, CV } from './components/StaticContent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // about me section
      name: 'Spencer Williams',
      title: 'Security Analyst',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      // education section
      school: '',
      location: '',
      degree: '',

      experience: {
        company: '',
        jobTitle: '',
        location: '',
        responsibilities: '',
      },

      experienceList: [],
    };
    this.updateCV = this.updateCV.bind(this);
  }

  updateCV(props) {
    const value = props.value;
    const name = props.name;
    this.setState({ [name]: value });
  }

  submitWorkExperience(props) {
    const experience = props.experience;
    this.setState({
      experienceList:
        this.state.experienceList.concat(experience)
    });
  }

  render() {

    return (
      <div className='App-main'>
        <div className='cvGenerator'>
        <Header />
        <AboutMe onChange={this.updateCV} />
        <WorkExperience 
        onChange={this.updateCV} 
        onSubmit={this.submitWorkExperience} />
        </div>
        <CV props={this.state} />
      </div>
    );
  }
}

export default App;
