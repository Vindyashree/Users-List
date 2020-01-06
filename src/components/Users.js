import React from 'react';
import User from './User';

class Users extends React.Component {
  render() {
    return (
      <div className='users-list'>
        {this.props.users.map(user => (
          <User profile={user} key={user.id} />
        ))}
      </div>
    );
  }
}
export default Users;
