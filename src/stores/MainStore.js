import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/Dispatcher'
import SearchStore from './SearchStore'

class MainStore extends EventEmitter {
    constructor(props) {
        super(props);
        this.state = {
          componentsVisible: false
        }; 
    }

    getComponentsVisibility() {
        return this.state.componentsVisible;
    }

    setVisibility() {
        this.state = {
          componentsVisible: true
        }; 
        this.emit('componentsshouldbevisible');
        SearchStore.forceReEmittOfUserChange();
    }

    handleActions(action) {        
        switch (action.type) {
          case 'MAINSTORE_SET_VISIBILITY':
            this.setVisibility();
            break;
        }
    }
}

const mainStore = new MainStore();

dispatcher.register(mainStore.handleActions.bind(mainStore));

export default mainStore;
