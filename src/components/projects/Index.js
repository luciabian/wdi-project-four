import React from 'react';
import axios from 'axios';
import ProjectBox from './ProjectBox';
import ProjectMap from '../common/Map';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getProjects = this.getProjects.bind(this);
  }


  getProjects() {
    axios.get('/api/projects')
      .then(res => this.setState({ projects: res.data }));
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {
    return (
      <section className="section">
        <h1 className="title is-2 volunteer">VOLUNTEER ABROAD PROGRAMS</h1>
        <hr />
        <div className="box-container">
          {!this.state.projects
            ?
            <p>Loading map...</p>
            :
            <ProjectMap
              projects={this.state.projects} />
          }
        </div>
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
