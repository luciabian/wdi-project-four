import React from 'react';
import axios from 'axios';

import { handleChange } from '../../lib/common';
import { getToken } from '../../lib/common';
import { Link } from 'react-router-dom';

export default class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const token = getToken();
    axios.delete(`/api/projects/${this.state.project._id}`, {
      headers: {Authorization: `Bearer ${token}`}
    })
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
            <div className="show-box">
              <h1 className="title is-1">{project.name} in {project.country}</h1>
              <hr />
              <div>
                <img src={project.image} alt={project.name} />
                <div>
                  <h2 className="subtitle is-3">About {project.name}</h2>
                  <p>{project.description}</p>
                </div>
                <div>
                  <h2 className="subtitle is-3">About {project.country}</h2>
                  <p>{project.countryInfo}</p>
                </div>
              </div>
              <Link to="/messages">
                <button className="button is-light">Ask for more information</button>
              </Link>
            </div>
          </div>
          :
          <p>Please wait...</p>
        }
      </section>
    );
  }
}
