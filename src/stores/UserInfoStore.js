import { EventEmitter } from 'events'
import axios from 'axios'
import dispatcher from '../dispatcher/Dispatcher'
import SearchStore from '../stores/SearchStore'

class UserInfoStore extends EventEmitter {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };

        SearchStore.on("usernamechanged", () => {
            this.state.username = SearchStore.getCurrentUserName()
        });
    }

    getUser(payload) {
        return {
            name: this.state.username,
            login: this.state.login,
            url: this.state.url,
            location: this.state.location,
            imgUrl: this.state.imgUrl,
            followers: this.state.followersusername,
            followings: this.state.followings
        }
    }

    getFollowers() {
        var self = this;
        return axios.get('https://api.github.com/users/' + self.state.username + '/followers')
            .then(function(response) {
                var followers = response.data.map(function(follower) {
                    return follower.login;
                });
                self.state.followers = followers;
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    getFollowings() {
        var self = this;
        return axios.get('https://api.github.com/users/' + self.state.username + '/following')
            .then(function(response) {
                var followings = response.data.map(function(following) {
                    return following.login;
                });
                self.state.followings = followings
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    getUserInfo() {
        var self = this;
        axios.get('https://api.github.com/users/' + self.state.username)
            .then(function(response) {
                self.state.name = response.data.name;
                self.state.login = response.data.login;
                self.state.url = response.data.html_url;
                self.state.location = response.data.location;
                self.state.imgUrl = response.data.avatar_url;
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    getUserData() {
        var self = this;
        return axios.all([this.getUserInfo(), this.getFollowers(), this.getFollowings()])
            .then(function(resultArray) {
                return self.state;
            });
    }

    handleActions(action) {
        switch (action.type) {}
    }
}

const userInfoStore = new UserInfoStore();

dispatcher.register(userInfoStore.handleActions.bind(userInfoStore));

export default userInfoStore;