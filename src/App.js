import React, { Fragment } from 'react';
import {Route , Switch , Link , BrowserRouter} from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import UserProfile from './components/UserProfile';
import axios from 'axios';
import Header from './Header';

class App extends React.Component
 {

  state = {
    users : []
  };

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => this.setState({users : response.data}))
  }

   render(){
    return (
   
      <BrowserRouter>
        <Fragment>
          <Header />
        <Switch>
        <Route exact path="/" render={ () => <h1>Welcome .....</h1>}/>
          <Route exact path="/List-Users" render={ () => <div><Users users= {this.state.users} /></div>}/>
          <Route exact path="/user/:id" render={props => (<UserProfile {...props}  />)} />
        </Switch>
          
          
        </Fragment>
      </BrowserRouter>
      
    );
   }

}

export default App;
