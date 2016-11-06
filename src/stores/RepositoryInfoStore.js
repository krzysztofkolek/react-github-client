import { EventEmitter } from 'events'
import axios from 'axios'
import dispatcher from '../dispatcher/Dispatcher'
import SearchStore from '../stores/SearchStore'

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

    getRepositoryData() {

    }

    handleActions(action) {
        switch (action.type) {
        }
    }
}

const repositoryInfoStore = new RepositoryInfoStore();

dispatcher.register(repositoryInfoStore.handleActions.bind(repositoryInfoStore));

export default repositoryInfoStore;
