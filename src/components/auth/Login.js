import React from 'react';
import axios from 'axios';
import { saveToken } from '../../lib/auth';
import { Link } from 'react-router-dom';

class AuthLogin extends React.Component {
  state = {};

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/login', this.state)
      .then(res => {
        saveToken(res.data.token);
      })
      .then(() => this.props.history.push('/projects'))
      .catch(() => {
        this.props.history.replace('/login');
      });
  }

  render() {
    return (
      <section>
        <div className="columns">
          <div className="card column is-4 is-offset-4">
            <h2 className="title is-2">LOG IN</h2>
            <form onSubmit={this.handleSubmit}>

              <div className="field">
                <label className="label">EMAIL:</label>
                <input
                  className="input"
                  name="email"
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">PASSWORD:</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>

              <button className="button is-light">Submit</button>
              <div className="is-center">
                <hr/>
                <p>Don’t have an account?</p>
                <Link to="/register">
                  <p>Sign Up</p>
                </Link>
              </div>

            </form>
          </div>
        </div>
      </section>

    );
  }
}

export default AuthLogin;
