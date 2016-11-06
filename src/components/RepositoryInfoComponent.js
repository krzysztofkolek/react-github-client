'use strict';

require('styles//RepositoryInfo.css');

import React from 'react';
import * as RepositoryInfoAction from '../actions/RepositoryInfoAction'

class RepositoryInfoComponent extends React.Component {
  render() {
    return (
      <div className="repositoryinfo-component">
        RepositoryInfoComponent
      </div>
    );
  }
}

RepositoryInfoComponent.displayName = 'RepositoryInfoComponent';

// Uncomment properties you need
// RepositoryInfoComponent.propTypes = {};
// RepositoryInfoComponent.defaultProps = {};

export default RepositoryInfoComponent;
