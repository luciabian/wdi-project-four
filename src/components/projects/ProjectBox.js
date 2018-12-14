import React from 'react';
import { Link } from 'react-router-dom';

function ProjectBox({ project }) {
  return (
    <div className="column is-4">
      <article className="project-box">
        <Link to={`/projects/${project._id}`}>
          <img src={project.image} />
          <h1 className="title is-4">{project.name} in {project.country}</h1>
        </Link>
        <Link to={`/projects/${project._id}`}>
          <button className="button is-light">More Info</button>
        </Link>
      </article>
    </div>
  );
}

export default ProjectBox;
