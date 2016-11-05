require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';

import RepositoryInfoComponent from './RepositoryInfoComponent';
import SearchComponent from './SearchComponent';
import UserInfoComponent from './UserInfoComponent';




class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="left">
        asd <SearchComponent />
        </div>
        <div className="right">
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
