import React from 'react';
import axios from 'axios';
import { saveToken } from '../../lib/auth';
import { Link } from 'react-router-dom';

class AuthRegister extends React.Component {
  state = {};

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/register', this.state)
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
            <h2 className="title is-2">SIGN UP</h2>
            <form onSubmit={this.handleSubmit}>

              <div className="field">
                <label className="label">USERNAME:</label>
                <input
                  className="input"
                  name="username"
                  onChange={this.handleChange}
                />
              </div>

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

              <div className="field">
                <label className="label">CONFIRM PASSWORD:</label>
                <input
                  type="password"
                  className="input"
                  name="passwordConfirmation"
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">PROFILE PICTURE (URL):</label>
                <input
                  className="input"
                  name="image"
                  onChange={this.handleChange}
                />
              </div>

              <button className="button is-light">Submit</button>
              <div className="is-center">
                <hr/>
                <p>Have an account?</p>
                <Link to="/login">
                  <p>Log In</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default AuthRegister;
