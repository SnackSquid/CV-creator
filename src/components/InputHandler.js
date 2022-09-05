import React, { Component } from 'react';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    this.props.onChange(event.target);
  };
  
  render() {
    if (!this.props.editing) return null;
    return (
      <div className='personalDetails'>
        <h2>Personal Details</h2>
        <form>
          <label>Name</label>
          <input
            type='text'
            name='name'
            onChange={this.handleChange}
            value={this.props.name}
            placeholder='Enter your name'
          />
          <label>Title</label>
          <input
            type='text'
            name='title'
            onChange={this.handleChange}
            value={this.props.title}
            placeholder='Enter your current job title'
          />
          <label>Personal Summary</label>
          <textarea
            type='textArea'
            name='summary'
            onChange={this.handleChange}
            value={this.props.summary}
            placeholder='Enter some details about yourself'
          />
        </form>
        <h2>Education</h2>
        <form>
          <label>School</label>
          <input
            type='text'
            name='school'
            onChange={this.handleChange}
            value={this.props.school}
            placeholder='School'
          />
          <label>Location</label>
          <input
            type='text'
            name='location'
            onChange={this.handleChange}
            value={this.props.location}
            placeholder='Location'
          />
          <label>Degree</label>
          <input
            type='text'
            name='degree'
            onChange={this.handleChange}
            value={this.props.degree}
            placeholder='Degree earned'
          />
        </form>
      </div>
    );
  }
}

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    this.props.onChange(event.target);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onEdit(event.target);
  };
  handleWorkExperience = (event) => {
    event.preventDefault();
    this.props.onSubmit(event.target);
    event.target.reset();

  };
  render() {
    if (!this.props.editing) return null;
    return (
      <div className='workExperience'>
        <h2>Work Experience</h2>
        <form onSubmit={this.handleWorkExperience}>
          <label>Company</label>
          <input type='text'
            name='company'
            placeholder='Company'
          />
          <label>Job Title</label>
          <input type='text'
            name='jobTitle'
          />
          <label>Location</label>
          <input type='text'
            name='location'
          />
          <label>Responsibilities</label>
          <textarea
            type='textArea'
            name='responsibilities'
            placeholder='Enter the job responsibilities'
          />
          <button type='submit'>Add Work Experience</button>
        </form>
        <div>
        <button type='submit'
        onClick={this.handleSubmit}>Generate CV</button>
        </div>
      </div>
    );
  }
}



export { AboutMe, WorkExperience };
