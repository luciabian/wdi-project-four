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
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-6 is-offset-3 is-mobile">
                <h3 className="title has-text-grey">Edit an item</h3>
                <div className="box">
                  <form onSubmit={this.handleSubmit}>
                    <div className="field">
                      <div className="control">
                        <input className="input " onChange={this.handleChange}  value={this.state.project.name || ''}  name="name"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.project.country || ''}  name="country"  placeholder="Country"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.project.image || ''}  name="image"  placeholder="Image URL"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.project.location || ''}  name="location"  placeholder="Location(ltn,lng)"/>
                      </div>
                    </div>
                    <button className="button is-light">Update</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default ProjectUpdate;
