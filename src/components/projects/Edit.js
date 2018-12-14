import React from 'react';
import axios from 'axios';


class ProjectUpdate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount(){
    axios.get(`/api/projects/${this.props.match.params.id}`)
      .then(result=> {
        this.setState({ project: result.data});
      });
  }
  handleSubmit(event) {
    console.log('form subbmitted', this.state);
    event.preventDefault();
    axios.put(`/api/projects/${this.props.match.params.id}`, this.state.project)
      .then(result => {
        console.log(result);
        this.props.history.push(`/projects/${this.props.match.params.id}`);
      });
  }

  handleChange({ target: {name, value}}) {
    this.setState({ project: { ...this.state.project, [name]: value }});
  }

  render() {
    return(
      <section>
        <div className="columns">
          <div className="card column is-6 is-offset-3 is-mobile">
            <h1 className="title is-2">EDIT PROJECT</h1>

            <form onSubmit={this.handleSubmit}>
              <label className="label">NAME:</label>
              <div className="field">
                <div className="control">
                  <input className="input " onChange={this.handleChange}  value={this.state.project.name || ''}  name="name" placeholder="Name of the Project"/>
                </div>
              </div>

              <div className="field">
                <label className="label">COUNTRY:</label>
                <div className="control">
                  <input className="input" onChange={this.handleChange}   value={this.state.project.country || ''}  name="country"  placeholder="Country"/>
                </div>
              </div>

              <div className="field">
                <label className="label">IMAGE URL:</label>
                <div className="control">
                  <input className="input" onChange={this.handleChange}   value={this.state.project.image || ''}  name="image"  placeholder="Image URL"/>
                </div>
              </div>

              <div className="field">
                <label className="label">LATITUDE:</label>
                <div className="control">
                  <input className="input" onChange={this.handleChange}   value={this.state.project.lat || ''}  name="lat"  placeholder="Latitude"/>
                </div>
              </div>

              <div className="field">
                <label className="label">LONGITUDE:</label>
                <div className="control">
                  <input className="input" onChange={this.handleChange}   value={this.state.project.lng || ''}  name="lng"  placeholder="Longitude"/>
                </div>
              </div>

              <div className="field">
                <label className="label">COUNTRY INFORMATION:</label>
                <div className="control">
                  <input className="input" onChange={this.handleChange}   value={this.state.project.countryInfo || ''}  name="countryInfo"  placeholder="Short description of the country"/>
                </div>
              </div>

              <div className="field">
                <label className="label">PROJECT DESCRIPTION:</label>
                <div className="control">
                  <input className="input" onChange={this.handleChange}   value={this.state.project.description || ''}  name="description"  placeholder="Simple description of the project"/>
                </div>
              </div>

              <button className="button is-light">Update</button>
            </form>

          </div>
        </div>
      </section>
    );
  }
}


export default ProjectUpdate;
