import React, { Component } from 'react';
import Item from './Item.js';

class Feed extends Component {
  

  render() {
    const feed = this.props.datadir.list().map((file) =>
      <Item key={file} datadir={this.props.datadir} file={file}/>
    );
    return (
      <div className="feed">{feed}</div>
    );
  }
}

export default Feed;