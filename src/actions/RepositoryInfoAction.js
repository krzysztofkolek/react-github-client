import dispatcher from '../dispatcher/Dispatcher'

export function addToDo(task) {
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        task
    })
}
