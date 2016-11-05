import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/Dispatcher'

class RepositoryInfoStore extends EventEmitter {
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

    handleActions(action) {
        console.log(action.type + " " + action.task);
        switch (action.type) {
            case 'CREATE_TODO':
                break;
        }
    }
}

const repositoryInfoStore = new RepositoryInfoStore();
//console.log('repositoryInfoStore register');
dispatcher.register(repositoryInfoStore.handleActions.bind(repositoryInfoStore));

export default repositoryInfoStore;
