import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getUsersAgeSum } from './redux/user/selectors';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
        {this.props.users.map(user => <li key={user.id}>{user.name}, {user.age}</li>)}
        </ul>
        <button onClick={() => this.props.fetchUsers()}>add user</button>
        <p>user age sum: {this.props.userAgeSum}</p>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.user.list,
  userAgeSum: getUsersAgeSum(state)
})

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch.user.addUser(user),
  fetchUsers: () => dispatch.user.fetchUserList()
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
