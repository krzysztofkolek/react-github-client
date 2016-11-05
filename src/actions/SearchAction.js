import dispatcher from '../dispatcher/Dispatcher'

export function changeCurrentUser(task) {
    dispatcher.dispatch({
        type: 'SEARCHSTORE_USER_CHANGED',
        payload: task
    })
}
