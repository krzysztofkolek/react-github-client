'use strict';

require('styles//RepositoryInfo.css');

import React from 'react';
import dispatcher from '../dispatcher/Dispatcher'
import * as RepositoryInfoAction from '../actions/RepositoryInfoAction'
import SearchStore from '../stores/SearchStore'
import RepositoryInfoStore from '../stores/RepositoryInfoStore'

class RepositoryInfoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
    }
  }

  componentWillMount() {
    var self = this;
    SearchStore.on('usernamechanged', () => {
        var response = RepositoryInfoStore.getRepositoryData();
        response.then(function(result) {
          self.setState(result);
        })              
    });
  }

  availableRepositories() {
    return <option>asd</option>
  }

  renderCommits() {
    return  <div>
              renderCommits
            </div>
  }

  renderForks() {
    return  <div>
              renderForks
            </div>
  }

  renderPullRequests() {
    return  <div>
              renderPullRequests
            </div>
  }

  renderContributors() {
    return  <div>
              renderContributors
            </div>
  }


  renderContent() {
    switch (this.state.activeContent) {
      case 'commits':
        return this.renderCommits();
      case 'forks':
        return this.renderForks();
      case 'pullRequests':
        return this.renderPullRequests();
      case 'contributors':
        return this.renderContributors();
    }
  }

  onActiveContentChange(e) {
    console.log(e.target.name) 
    this.setState({
      activeContent: e.target.name
    })
  }

  render() {
    return (
      <div className="repositoryinfo-component">
        <div>
            <div>
              repositories: 
              <select>
                {this.availableRepositories()}
              </select>
            </div>
            <div>
              <button name="commits" onClick={this.onActiveContentChange.bind(this)}>Commits</button>
              <button name="forks" onClick={this.onActiveContentChange.bind(this)}>Forks</button>
              <button name="pullRequests" onClick={this.onActiveContentChange.bind(this)}>Pulls</button>
              <button name="contributors" onClick={this.onActiveContentChange.bind(this)}>Contributors</button>
            </div>
          </div>
          <div>
            {this.renderContent()}
          </div>
      </div>
    );
  }
}

RepositoryInfoComponent.displayName = 'RepositoryInfoComponent';

// Uncomment properties you need
// RepositoryInfoComponent.propTypes = {};
// RepositoryInfoComponent.defaultProps = {};

export default RepositoryInfoComponent;
