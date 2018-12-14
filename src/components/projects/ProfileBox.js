import React from 'react';
import { Link } from 'react-router-dom';
// import { handleDelete } from './Show';

function ProfileBox({ project, handleDelete }) {
  return (
    <div className="column is-4">
      <article className="profile-box">
        <Link to={`/projects/${project._id}`}>
          <img src={project.image} />
          <h1 className="title is-4">{project.name} in {project.country}</h1>
        </Link>
        <button className="delete-button button is-light" onClick={handleDelete} id={project._id}>Delete</button>
        <Link to={`/projects/${project._id}/edit`}>
          <button className="edit-button button is-light">Update</button>
        </Link>
      </article>
    </div>
  );
}

export default ProfileBox;
