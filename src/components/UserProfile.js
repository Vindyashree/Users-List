import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
    </SvgIcon>
  );
}

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
        this.setState({ profile: response.data, loading: true });
      });

    if (!this.state.loading) {
      return <LinearProgress />;
    }
    return (
      <div className='ProfileContainer'>
        <Link to='/List-Users'>GoBack</Link>
        <Card variant='outlined' className='Userprofile'>
          <CardContent>
            {' '}
            <div>
              <div>
                <figure className='userprofileimage'>
                  <img
                    className='userprofileimage'
                    src='https://cdn.imgbin.com/21/23/1/imgbin-computer-icons-female-user-profile-avatar-material-x1Zz1EDVQQssccaQu0dy0VFGy.jpg'
                    alt='image'
                  />
                  <figcaption>{this.state.profile.name}</figcaption>
                </figure>
              </div>
              <div className='information'>
                <strong>{this.state.profile.username}</strong>
                <br />
                <MailIcon color='secondary' /> {this.state.profile.email}
                <br />
                <CallIcon color='secondary' /> {this.state.profile.phone}
                <br />
                <HomeIcon color='secondary' />{' '}
                {this.state.profile.address.street}
                <br />
                {this.state.profile.address.suite}
                <br />
                {this.state.profile.address.city}
                <br />
                {this.state.profile.address.zipcode}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
