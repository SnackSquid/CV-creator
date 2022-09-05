import React, { Component } from 'react';
import { AboutMe, WorkExperience } from './components/InputHandler';
import { CV } from './components/CVBuilder';
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
      school: 'Western Illinois University',
      location: 'Macomb, IL',
      degree: 'B.A. History',
      editing: true,
      experienceList: [
        {company: 'Shmeep Co',
        jobTitle: 'Junior Web Developer',
        location: 'Chicago',
        responsibilities: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
        key: 0,
      }
      ],
    };
    this.updateCV = this.updateCV.bind(this);
    this.editCV = this.editCV.bind(this);
    this.submitWorkExperience = this.submitWorkExperience.bind(this);
  }

  updateCV(props) {
    const value = props.value;
    const name = props.name;
    this.setState({ [name]: value });
  }

  submitWorkExperience(props) {
    const index = this.state.experienceList.length;
    const experience = {
      company: props[0].value,
      jobTitle: props[1].value,
      location: props[2].value,
      responsibilities: props[3].value,
      key: index,
    };
  
    this.setState({ experienceList: this.state.experienceList.concat(experience) });
  }

  editCV(props) {
    const button = props.name;
    if (button === 'startEditing') {
      this.setState({
        editing: true,
      })
    } else {
      this.setState({
        editing: false,
      })
    }                         
  }

  Header() {
    if (!this.state.editing) return null;
    return (
      <div className='Header'>
        <h1>CV Maker+</h1>
      </div>
    )
  }

  render() {
    const header = this.Header();
    return (
      <div className='App-main'>
        {header}
        <AboutMe
        editing={this.state.editing} 
        onChange={this.updateCV} />
        <WorkExperience
        editing={this.state.editing} 
        onEdit={this.editCV} 
        onChange={this.updateCV} 
        onSubmit={this.submitWorkExperience} />
    
        <CV
        editing={this.state.editing} 
        props={this.state}
        onEdit={this.editCV} />
      </div>
    );
  }
}

export default App;
