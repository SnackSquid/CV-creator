import React, { Component } from 'react';
import { AboutMe, WorkExperience } from './components/InputHandler';
import { Header } from './components/StaticContent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // about me section
      name: '',
      title: '',
      summary: '',
      // education section
      school: '',
      location: '',
      degree: '',

      experience: {
        title: '',
        company: '',
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
        <Header />
        <AboutMe onChange={this.updateCV} />
        <WorkExperience onSubmit={this.submitWorkExperience} />
      </div>
    );
  }
}

export default App;
