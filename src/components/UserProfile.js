import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class UserProfile extends React.Component {
  state = {
    profile: [],
    loading: false
  };

  render() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
      )
      .then(response => {
        this.setState({ profile: response.data });
        this.setState({ loading: true });
      });

    if (!this.state.loading) {
      return <div>Loading.....</div>;
    }
    return (
      <div class='ProfileContainer'>
        <Link to='/List-Users'>GoBack</Link>
        <div className='Userprofile'>
          ID : {this.state.profile.id} <br />
          Name : {this.state.profile.name} <br />
          UserName : {this.state.profile.username} <br />
          Email : {this.state.profile.email} <br />
          Phone : {this.state.profile.phone} <br />
        </div>
      </div>
    );
  }
}
