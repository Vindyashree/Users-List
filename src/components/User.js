import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';



export default class User extends React.Component{
 
  
    render(){
        return(
          <div className="user">
             
            <ul>
            <li>
              <Link to={`/user/${this.props.profile.id}`} className="eachUserLink">
                <span className="avatar">
                <Avatar >{this.props.profile.name.charAt(0)}</Avatar>
                </span>
              
              
              {this.props.profile.name}
              </Link>
            </li>
            </ul>
          </div> 
          

        )
    }
}