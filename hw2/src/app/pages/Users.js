import React, { Component } from "react";
import { addUser, getUsers } from '../actions/userActions';
import store from '../stores/userStore'; 
import UsersList from "../components/UsersList";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.onUserChange = this.onUserChange.bind(this);
    this.newUser = this.newUser.bind(this);
  }

  newUser() {
    const name = 'Peter Parker';
    const email = 'peterparker@mail.ru';
    const phone = 8-915-777-77-77;
    const website = 'http://peter-parcker.ru';
    addUser(name, email, phone, website);
  }

  onUserChange() {
    this.setState({ users: store.users });
  }

  componentDidMount() {
    getUsers();
    store.on('change', this.onUserChange);
  }

  componentWillUnmount() {
    store.removeListener('change', this.onUserChange);
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.newUser}>Добавить пользователя</button>
        <UsersList users={this.state.users} />
      </div>
    );
  }
}
