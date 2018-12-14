import React from 'react';
import axios from 'axios';
import { currentUserId, getHeader, getToken } from '../../lib/auth';
import ProfileBox from './ProfileBox';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/profile/${currentUserId()}`, getHeader())
      .then(res => {
        console.log('We have res.data', res.data);
        this.setState({ user: res.data });
      });
  }

  handleDelete(e) {
    const token = getToken();
    console.log('----->', e.target.id);
    axios.delete(`/api/projects/${e.target.id}`, {
      headers: {Authorization: `Bearer ${token}`}
    })
      .then(() => {
        this.props.history.push('/projects');
      });
  }


  render() {
    const user = this.state.user;
    return (
      <section>
        {user
          ?
          <div className>
            <h1 className="username title">{user.username}</h1>
            <h2 className="profile-subtitle">Projects you created</h2>
            <div className="columns profile-card">
              <div className="card box-container columns">
                {user.projectsCreated && user.projectsCreated.map(
                  project => <ProfileBox key={project._id} project={project} handleDelete={this.handleDelete}/>
                )}
              </div>
            </div>
          </div>
          :
          <p>Please wait...</p>
        }
      </section>
    );
  }
}
