import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <h1>CV Maker</h1>
      </div>
    );
  }
}

class CV extends Component {
  constructor(props) {
    super(props);
    this.editButton = this.editButton.bind(this);
  }
  editButton(event) {
    this.props.onEdit(event.target);
  }
  render() {
    const unpackedProps = this.props.props;
    if (unpackedProps.editing) return null;
    return (
      <div className='CV'>
        <div className='cvHeader'>
          <div className='headerContent'>
            <h1 className='name'>{unpackedProps.name}</h1>
            <p className='title'>{unpackedProps.title}</p>
            <p>{unpackedProps.summary}</p>
          </div>
        </div>
        <div className='spacer'>
          <div>
            <button className='edit'
            name='startEditing'
            onClick={this.editButton}>
              Edit
            </button>
          </div>
        </div>
        <div className='experience'>
          <h2>Work Experience</h2>
          <hr />
          <p>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </p>
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

export { Header, CV };
