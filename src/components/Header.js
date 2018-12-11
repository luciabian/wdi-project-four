import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken, currentUserId } from '../lib/auth';

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
          <Link className="navbar-item" to="/">HOME</Link>
        </div>
        <div className="navbar-end">
          <Link className="navbar-item" to="/projects">DESTINATIONS AND PROGRAMS</Link>
          {isAuthenticated() && <Link className="navbar-item" to='/projects/new'>ADD A PROJECT</Link>}
          {isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">LOG OUT</a>}
          {isAuthenticated() && <Link className="navbar-item" to="/messages">MESSAGES</Link>}
          {!isAuthenticated() && <Link className="navbar-item" to="/login">LOG IN</Link>}
          {!isAuthenticated() && <Link className="navbar-item" to="/register">SIGN UP</Link>}
          {isAuthenticated() && <Link className="navbar-item" to={`/profile/${currentUserId()}`}>MY PROFILE</Link>}
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
