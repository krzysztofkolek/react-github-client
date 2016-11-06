require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';

import SearchComponent from './SearchComponent';
import UserInfoComponent from './UserInfoComponent';
import RepositoryInfoComponent from './RepositoryInfoComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="top">
          <SearchComponent />
        </div>
        <div className="content-container">
          <div className="left">
            <UserInfoComponent />
          </div>
          <div className="right">
            <RepositoryInfoComponent />
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
