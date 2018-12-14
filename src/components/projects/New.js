import React from 'react';
import axios from 'axios';
import { handleChange } from '../../lib/common';
import ProjectForm from './ProjectForm';

export default class ProjectNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Submit handled', this.state);
    axios.post('/api/projects',  this.state)
      .then(() => this.props.history.push('/projects'));
  }

  render() {
    return(
      <section className="project-form">
        <ProjectForm
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
      </section>
    );
  }
}
