import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <img src={require('./matt-duncan-IUY_3DvM__w-unsplash.jpg')} alt='logo-header' />
        <h1>CV Maker</h1>
      </div>
    );
  }
}

class CV extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const unpackedProps = this.props.props;
    return (
      <div className='CV'>
        <div className='Header'>
          <div>
            <h1>{unpackedProps.name}</h1>
            <p>{unpackedProps.title}</p>
          </div>
          <div>
            <img src="" alt="headshot" />
          </div>
        </div>
        <div className="summary">
          <p>{unpackedProps.summary}</p>
        </div>
        <div className="experience">
          <p>{ }</p>
        </div>
        <div className="education">
          <p>{unpackedProps.school}</p>
          <p>{unpackedProps.location}</p>
          <p>{unpackedProps.degree}</p>
        </div>
      </div>
    )
  }
}


export { Header, CV }