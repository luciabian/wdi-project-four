import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken, decodeToken } from '../lib/auth';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    deleteToken();
    this.props.history.push('/');
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <h2 className="title is-2">Volunteering</h2>
          {isAuthenticated() && <p>Welcome back! {decodeToken().username}</p>}
        </div>
        <div className="navbar-end">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/projects">All the Projects</Link>
          <Link className="navbar-item" to='/projects/new'>Add a Project</Link>
          {isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Log Out</a>}
          {!isAuthenticated() && <Link className="navbar-item" to="/login">Log In</Link>}
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);