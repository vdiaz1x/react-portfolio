import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show:false,
    };

    this.project_image = this.project_image.bind(this);
  }

  project_image(){
    console.log(this.state);

    this.setState({
      show:!this.state.show
    })
  }

  render() {
    const stack = this.props.tech.map(tech => <span className="project_tech_stack" key={`${tech}_stack`} >{tech}</span>);

    const show = this.state.show ? 'slide-in-fwd-center' : '';

    const side=this.props.id%2===0 ? "img_left" : "img_right";

    return (
      <div className="project_item">
        <section className="project_text">
          <h3>ID No. <span className="tag">{this.props.id}</span></h3>
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
          <h3>Code Name : <span className="project_author red">{this.props.code}</span> </h3>
          <h3>Author : <span className="project_author blue">{this.props.author}</span> </h3>
          <h3>Tech Stack : <span className="project_author blue">{stack}</span> </h3>
          <img className={`project_image ${show} ${side}`} src={this.props.img} alt={this.props.img} />
        </section>
        <section className="project_data">
          <a className="project_link" href={this.props.git}>
            <FontAwesomeIcon className="project_icon" icon={['fab', 'github']} size="3x" color="#eee" />
          </a>
          <a className="project_link" href={this.props.web}>
            <FontAwesomeIcon className="project_icon" icon={['fas', 'globe']} size="3x" color="#eee" />
          </a>
          <div className="project_link" onClick={this.project_image}>
            <FontAwesomeIcon className="project_icon" icon={['far', 'image']} size="3x" color="#eee" />
          </div>
        </section>
      </div>
    );
  }
}

export default ProjectItem;
