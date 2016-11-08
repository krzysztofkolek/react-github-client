require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';

import SearchComponent from './SearchComponent';
import UserInfoComponent from './UserInfoComponent';
import RepositoryInfoComponent from './RepositoryInfoComponent';
import MainStore from '../stores/MainStore'

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      componentsVisible: false
    };
  }

  componentWillMount() { 
    MainStore.on('componentsshouldbevisible', () =>{ 
        this.setState({
          componentsVisible: MainStore.getComponentsVisibility()
        }); 
    });
  }
  
  render() {
    var self = this; 
    return (
      <div className="index">
        <div className="top">
          <SearchComponent />
        </div>
        <div className="content-container">
          <div className="left">
            { this.state.componentsVisible ?  <UserInfoComponent /> : null }
          </div>
          <div className="right">
            { this.state.componentsVisible ? <RepositoryInfoComponent /> : null }
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
