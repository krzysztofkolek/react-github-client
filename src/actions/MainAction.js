import dispatcher from '../dispatcher/Dispatcher'

export function setComponentsAsVisible() {
  setTimeout(function() {
    dispatcher.dispatch({
        type: 'MAINSTORE_SET_VISIBILITY'
    })
  }, 1);
}
