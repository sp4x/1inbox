import React, { Component } from 'react';
import jetpack from 'fs-jetpack'
import Item from './Item.js';

class Items extends Component {
  

  render() {
    const feed = this.props.datadir.list().map((path) =>
      <Item key={path} path={path}/>
    );
    return (
      <div>{feed}</div>
    );
  }
}

export default Items;