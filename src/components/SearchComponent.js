'use strict';

require('styles//Search.css');

import React from 'react';
import * as SearchAction from '../actions/SearchAction'
import SearchStore from '../stores/SearchStore'
import dispatcher from '../dispatcher/Dispatcher'

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
  }

  onUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeBtnClick() {
    SearchAction.changeCurrentUser({ username: this.state.username });
  }

  render() {
    return (
      <div className="search-component">searccomp:
        <div>Github client</div>
        <div>
          <div>
            Enter your username:  
          </div>
          <div>
            <input type="text" name="username" 
                  placeholder="Enter your username..."
                  onChange={this.onUsernameChange.bind(this)}
                    />
            <button onClick={this.onChangeBtnClick.bind(this)}>Change</button>
          </div>
        </div>
      </div>
    );
  }
}

SearchComponent.displayName = 'SearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
