import React from 'react';
import ProjectItem from '../items/ProjectItem';


function Projects(props) {
  return (
    <div className="projects">
      <h1 className="name">PROJECTS</h1>
      <div className="project_list">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  )
}

export default Projects;