import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/Dispatcher'

class SearchStore extends EventEmitter {
    constructor() {
        super();
    }

    setusername(input) {
      this.username = input.payload.username;
      this.emit('usernamechanged');
    }

    getCurrentUserName() {
      return this.username;
    }

    handleActions(action) {
        switch (action.type) {
          case 'SEARCHSTORE_USER_CHANGED':
            this.setusername(action);
            break;
        }
    }
}

const searchStore = new SearchStore();

dispatcher.register(searchStore.handleActions.bind(searchStore));

export default searchStore;
