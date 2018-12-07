import React from 'react';
import axios from 'axios';

import { handleChange } from '../../lib/common';
import { Link } from 'react-router-dom';

export default class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    axios.delete(`/api/projects/${this.state.project._id}`)
      .then(() => {
        this.props.history.push('/projects');
      });
  }

  componentDidMount() {
    axios.get(`/api/projects/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ project: res.data });
        console.log('We have', this.state.project);
      });
  }

  render() {
    const project = this.state.project;
    return (
      <section>
        {project
          ?
          <div>
            <div className="columns show-box">
              <h1 className="title is-1">{project.name} in {project.country}</h1>
              <hr />
              <img src={project.image} alt={project.name} />
            </div>
          </div>
          :
          <p>Please wait...</p>
        }
        <button className="delete-button" onClick={this.handleDelete}>Delete</button>
        <Link to={`/projects/${this.props.match.params.id}/edit`}>
          <button className="edit-button">Update</button>
        </Link>
      </section>
    );
  }
}
