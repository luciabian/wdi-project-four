import React from 'react';
import axios from 'axios';
import ProjectBox from './ProjectBox';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/projects')
      .then(result => this.setState({ projects: result.data }));
  }

  render() {
    return (
      <section className="section">
        <h1 className="title">All the Volunteering programs</h1>
        <hr />
        <div className="box-container columns is-multiline">
          {this.state.projects && this.state.projects.map(
            project => <ProjectBox key={project._id} project={project}/>
          )}
        </div>
      </section>
    );
  }
}

export default ProjectIndex;
