import React, { Component } from 'react';

class AboutMe extends Component {
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
  };
  render() {
    return (
      <div className='personalDetails'>
        <form onSubmit={this.handleSubmit}>
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
        <div className='education'>
        <form onSubmit={this.handleSubmit}>
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
  };
  render () {
    return (
      <div>
        <form onSubmit={this.submitWorkExperience}>
          <label>Title</label>
          <input type='text' 
          value={this.props.title}
          onChange={this.handleChange}
          />
          <label>Title</label>
          <input type='text' 
          value={this.props.title}
          onChange={this.handleChange}
          />
          <label>Title</label>
          <input type='text' 
          value={this.props.title}
          onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}



export { AboutMe, WorkExperience };
