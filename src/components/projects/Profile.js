import React from 'react';
import axios from 'axios';
import { decodeToken, getHeader } from '../../lib/auth';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('This is this.state.user', this.state.user);
    axios.get(`/api/profile/${decodeToken().sub}`, getHeader())
      .then(res => {
        this.setState({ user: res.data });
        console.log('We have', this.state.user);
      });
  }

  render() {
    const user = this.state.user;
    return (
      <section>
        {user
          ?
          <div>
            <div className="columns show-box">
              <h1 className="title is-1">{user.username}</h1>
            </div>
          </div>
          :
          <p>Please wait...</p>
        }
      </section>
    );
  }
}
