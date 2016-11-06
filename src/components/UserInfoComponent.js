'use strict';

require('styles//UserInfo.css');

import React from 'react';
import dispatcher from '../dispatcher/Dispatcher'
import * as UserInfoAction from '../actions/UserInfoAction'
import SearchStore from '../stores/SearchStore'
import UserInfoStore from '../stores/UserInfoStore'

class UserInfoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      login: '',
      url: '',
      location: '',
      imgUrl: '',
      followers: [],
      followings: []
    }
  }

  componentWillMount() {
    var self = this;
      SearchStore.on('usernamechanged', () => {
        var response = UserInfoStore.getUserData();
        response.then(function(result) {
          self.setState(result);
        })              
      });
  }
  
  renderFollowers() {
    return this.state.followers.map(function(follower, index){
      return <li key={index}><a href={follower}>{follower}</a></li>
    });
  }

  renderFollowing() {
    return this.state.followings.map(function(following, index){
      return <li key={index}><a href={following}>{following}</a></li>
    });
  }

  render() {
    return (
      <div className="userinfo-component">
        <div className="row">
          <div className="left-top">
            <img src={this.state.imgUrl} alt="img" /> 
          </div>
          <div className="right-top">
            <ul className="main-user-details">
              <li>Name: {this.state.name}</li>
              <li>Login: {this.state.login}</li>
              <li>url: {this.state.url}</li>
              <li>Location: {this.state.location}</li>              
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="right-bottom">
            Followers
            <ul>
              {this.renderFollowers()}
            </ul>
          </div>
          <div className="left-bottom">
            Following
            <ul>
              {this.renderFollowing()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

UserInfoComponent.displayName = 'UserInfoComponent';

// Uncomment properties you need
// UserInfoComponent.propTypes = {};
// UserInfoComponent.defaultProps = {};

export default UserInfoComponent;
