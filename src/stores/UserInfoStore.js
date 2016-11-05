import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/Dispatcher'

class UserInfoStore extends EventEmitter {
    constructor() {
        super();
        this.state = {
          username: ''
        };

        SearchStore.on("usernamechanged", () => {
          this.setState({
            username: SearchStore.getCurrentUserName()
          });
          console.log('UserInfoStore' + SearchStore.getCurrentUserName());
        });
    }

    getUser(payload) {
      return this.state.username;
    }

    handleActions(action) {
        console.log(action.type + " " + action.task);
        switch (action.type) {
            case 'GET_USER':
              console.log('UserInfoStore GET_USER');
              break;
        }
    }
}

const userInfoStore = new UserInfoStore();
//console.log('userInfoStore register');
dispatcher.register(userInfoStore.handleActions.bind(userInfoStore));

export default userInfoStore;
