import dispatcher from '../dispatcher/Dispatcher'

export function setComponentsAsVisible() {
    dispatcher.dispatch({
        type: 'MAINSTORE_SET_VISIBILITY'
    })
}
