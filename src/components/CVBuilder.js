import React, { Component } from 'react';



class CV extends Component {
  constructor(props) {
    super(props);
    this.editButton = this.editButton.bind(this);
  }

  editButton(event) {
    this.props.onEdit(event.target);
  }

  CVHeader() {
    const info = this.props.props
    return (
    <div className='cvHeader'>
        <div className='headerContent'>
          <h1 className='name'>{info.name}</h1>
          <p className='title'>{info.title}</p>
          <p>{info.summary}</p>
        </div>
      </div>
    )
  }

  Spacer() {
    return (
      <div className='spacer'>
        <div>
          <button className='edit'
            name='startEditing'
            onClick={this.editButton}>
            Edit
          </button>
        </div>
      </div>
    )
  }

  ExperienceSection() {
    const list = this.props.props.experienceList;
    const section = list.map((item) => (
      
      <div key={item.key}>
        <h3>{item.company}</h3>
        <p>{item.location}</p>
        <h4>{item.jobTitle}</h4>
        <p>{item.responsibilities}</p>
      </div>
    ))
    return section;
  }
  render() {
    const unpackedProps = this.props.props;
    if (unpackedProps.editing) return null;
    const header = this.CVHeader();
    const spacer = this.Spacer();
    const experience = this.ExperienceSection();
    return (
      <div className='CV'>
        {header}
        {spacer}
        <div>
        <h2>Work Experience</h2>
          <hr />
          {experience}
        </div>
        

        <div className='education'>
          <h2>Education</h2>
          <hr />
          <p>{unpackedProps.school}</p>
          <p>{unpackedProps.location}</p>
          <p>{unpackedProps.degree}</p>
        </div>
      </div>
    );
  }
}

export { CV };
