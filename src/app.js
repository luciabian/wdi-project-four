import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Messages from './components/messages/Messages';
import ProjectIndex from './components/projects/Index';
import ProjectShow from './components/projects/Show';
import ProjectNew from './components/projects/New';
import ProjectUpdate from './components/projects/Edit';
import Profile from './components/projects/Profile';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/projects' component={ProjectIndex}/>
            <Route exact path='/projects/new' component={ProjectNew}/>
            <Route exact path='/login' component={AuthLogin}/>
            <Route exact path='/messages' component={Messages}/>
            <Route exact path='/register' component={AuthRegister}/>
            <Route path='/projects/:id/edit' component={ProjectUpdate}/>
            <Route path='/projects/:id' component={ProjectShow}/>
            <Route path='/profile/:id' component={Profile}/>
          </Switch>
        </main>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
