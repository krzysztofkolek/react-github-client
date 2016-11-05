import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/Dispatcher'

class SearchStore extends EventEmitter {
    constructor() {
        super();
    }

    setusername(payload) {
      console.log('setuseernmae' + payload);
      this.username = 'Jon Doe';
      this.emit('usernamechanged');
    }

    getCurrentUserName() {
      console.log(this.username);
      return this.username;
    }

    handleActions(action) {
        console.log(action.type + " " + action.task);
        switch (action.type) {
          case 'SEARCHSTORE_USER_CHANGED':
            this.setusername(action);
            break;
          case 'SEARCHSTORE_USER_GET':
            return this.getCurrentUserName();
            break;
        }
    }
}

const searchStore = new SearchStore();
console.log('searchStore register');
dispatcher.register(searchStore.handleActions.bind(searchStore));

export default searchStore;
