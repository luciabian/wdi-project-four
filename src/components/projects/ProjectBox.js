import React from 'react';
import { Link } from 'react-router-dom';

function ProjectBox({ project }) {
  return (
    <div className="column is-4">
      <Link to={`/projects/${project._id}`}>
        <article className="project-box">
          <h1>{project.name}-{project.country}</h1>
          <img src={project.image} />
        </article>
      </Link>
    </div>
  );
}

export default ProjectBox;
