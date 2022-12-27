import { Component } from 'react';

import dataUsers from '../data/users';
import { updateData } from 'services/updateData';
import { UserList } from './UserList/UserList';

export class App extends Component {
  state = {
    users: updateData(dataUsers),
  };

  componentDidMount() {
    const followers = JSON.parse(localStorage.getItem('follow'));
    if (followers) {
      this.setState({ users: followers });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.setState.users) {
      localStorage.setItem('follow', JSON.stringify(this.state.users));
    }
  }
  onFollow = (id, prop) => {
    this.setState(({ users }) => ({
      users: users.map(user => {
        if (user.id === id) {
          return {
            ...user,
            [prop]: !user[prop],
          };
        }
        return user;
      }),
    }));
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <h1 className="visually-hidden">Followers App</h1>
        <section>
          <UserList users={users} onFollow={this.onFollow} />
        </section>
      </>
    );
  }
}
