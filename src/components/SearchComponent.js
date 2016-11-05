'use strict';

require('styles//Search.css');

import React from 'react';
import * as SearchAction from '../actions/SearchAction'
import SearchStore from '../stores/SearchStore'
import dispatcher from '../dispatcher/Dispatcher'

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);

    SearchAction.changeCurrentUser({username: 'username123'});
    this.state = {
      username: SearchStore.getCurrentUserName()
    }
  }


  render() {
    var self = this;
    return (
      <div className="search-component">searccomp:
        {self.state.username}
      </div>
    );
  }
}

SearchComponent.displayName = 'SearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
