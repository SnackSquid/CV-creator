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
    this.props.onChange(event.target);
    this.props.onEdit(event.target);
  };
  render() {
    if (!this.props.editing) return null;
    return (
      <div className='workExperience'>
        <form onSubmit={this.handleSubmit}>
          <label>Company</label>
          <input type='text'
            name='company'
            value={this.props.company}
            onChange={this.handleChange}
            placeholder='Company'
          />
          <label>Job Title</label>
          <input type='text'
            name='jobTitle'
            value={this.props.jobTitle}
            onChange={this.handleChange}
          />
          <label>Location</label>
          <input type='text'
            name='location'
            value={this.props.location}
            onChange={this.handleChange}
          />
          <label>Responsibilities</label>
          <textarea
            type='textArea'
            name='responsibilities'
            onChange={this.handleChange}
            value={this.props.responsibilities}
            placeholder='Enter the job responsibilities'
          />
          <button type='submit'>Generate CV</button>
        </form>
      </div>
    );
  }
}



export { AboutMe, WorkExperience };
