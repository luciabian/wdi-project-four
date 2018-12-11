import React from 'react';
import axios from 'axios';
import { currentUserId, getHeader } from '../../lib/auth';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/profile/${currentUserId()}`, getHeader())
      .then(res => {
        console.log('We have res.data', res.data);
        this.setState({ user: res.data });
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
