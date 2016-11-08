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
      selectedRepo: '',
      repos: []
    }
  }

  componentWillMount() {
    var self = this;
    SearchStore.on('usernamechanged', () => {
        var response = RepositoryInfoStore.getRepositoryList();
        response.then(function(repos) {
          self.setState({
            selectedRepo: repos[0],
            repos: repos
          });
        })              
    });
  }

  availableRepositories() {
    return this.state.repos.map(function(repo, index) {
      return <option key={index}>{ repo }</option>
    });
  }
  
  renderCommits() {
    return  <div>
              {this.state.commits.map(function(commit, index){
                return <div key={index}>
                        <div>
                          {commit.author.name}
                        </div>
                        <div>
                          {commit.author.email}
                        </div>
                        <div>
                          {commit.author.date}
                        </div>
                        <div>
                          {commit.message}
                        </div>
                       </div>
              })}
            </div>
  }  


  renderForks() {
    return  <div>
              {this.state.forks.map(function(fork, index){
                return <div key={index}>
                          {fork.full_name}
                       </div>
              })}
            </div>
  }

  renderPullRequests() {
    return  <div>
              renderPullRequests
            </div>
  }

  renderContributors() {
    return  <div>
              {this.state.contributors.map(function(contributor, index){
                return <div key={index}>
                          {contributor.login}
                       </div>
              })}
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

  onSelectChange(e) { 
    var self = this;
    var response = RepositoryInfoStore.getSelectedRepositoryData(e.target.value);
        response.then(function(result) {
          self.setState(result);
        });              
  }

  render() {
    return (
      <div className="repositoryinfo-component">
        <div>
            <div>
              Repositories: 
              <select onChange={this.onSelectChange.bind(this)} value={this.state.selectedRepo}>
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
