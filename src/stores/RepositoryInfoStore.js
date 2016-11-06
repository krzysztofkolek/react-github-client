import { EventEmitter } from 'events'
import axios from 'axios'
import dispatcher from '../dispatcher/Dispatcher'
import SearchStore from './SearchStore'

class RepositoryInfoStore extends EventEmitter {
    constructor(props) {
        super(props);
        this.state = {
          username: ''
        };

        SearchStore.on("usernamechanged", () => {
          this.state.username = SearchStore.getCurrentUserName();
        });
    }

    getRepositoryListRequest() {
        var self = this;
        return axios.get('https://api.github.com/users/' + self.state.username + '/repos')
            .then(function(response) {
                var repos = [];
                response.data.map(function(repo) {
                    repos.push(repo.name);
                });
                return repos;
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    getRepositoryList() {
        var self = this;
        return axios.all([this.getRepositoryListRequest()])
            .then(function(result) {
                return result[0];
            });
    }
    
    getSelectedRepositoryData(selectedRepositoryName) {
        var self = this;
        return axios.all([this.getCommitsList(selectedRepositoryName), 
                          this.getForksList(selectedRepositoryName), 
                          this.getPullRequestsList(selectedRepositoryName), 
                          this.getContributorsList(selectedRepositoryName)])
            .then(function(resultArray) {
                return {
                  commits: resultArray[0],
                  forks: resultArray[1],
                  pullRequests: resultArray[2],
                  contributors: resultArray[3]
                };
            });
    }

    getCommitsList(selectedRepositoryName) {
        var self = this;
        return axios.get('https://api.github.com/repos/' + self.state.username + '/' + selectedRepositoryName + '/commits')
            .then(function(response) {
                var commits = response.data.map(function(commit) {
                    return {
                      author: {
                        name: commit.commit.author.name,
                        email: commit.commit.author.email,
                        date: commit.commit.author.date,
                      },
                      message: commit.commit.message
                    };
                });
                return commits;
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    getForksList(selectedRepositoryName) {
        var self = this;
        return axios.get('https://api.github.com/repos/' + self.state.username + '/' + selectedRepositoryName + '/forks')
            .then(function(response) {
                var forks = response.data.map(function(fork) {
                    return {
                      full_name: fork.full_name
                    };
                });
                return forks;
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    getPullRequestsList(selectedRepositoryName) {
        var self = this;
        return axios.get('https://api.github.com/repos/' + self.state.username + '/' + selectedRepositoryName + '/pulls')
            .then(function(response) {
                var pullRequests = response.data.map(function(pullRequest) {
                    return {
                      
                    };
                });
                return pullRequests;
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    getContributorsList(selectedRepositoryName) {
        var self = this;
        return axios.get('https://api.github.com/repos/' + self.state.username + '/' + selectedRepositoryName + '/contributors')
            .then(function(response) {
                var contributors = response.data.map(function(contributor) {
                    return {
                      login: contributor.login
                    };
                });
                return contributors;
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    
    handleActions(action) {
        switch (action.type) {
        }
    }
}

const repositoryInfoStore = new RepositoryInfoStore();

dispatcher.register(repositoryInfoStore.handleActions.bind(repositoryInfoStore));

export default repositoryInfoStore;
