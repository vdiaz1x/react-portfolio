import React from 'react';
import ProjectItem from '../items/ProjectItem';

function Projects(props) {
  // map
  const project_list = props.projects.map((project, index) => <ProjectItem key={`project${index + 1}`} {...project} image={props.image} />);
  return (
    <div className="projects" id="proj">
      <h1 className="name">
        <span className="tag">&lt; </span>
        Project Archive
        <span className="tag"> /&gt;</span>
      </h1>
      <div className="project_list">
        {project_list}
      </div>
    </div>
  );
}

export default Projects;
