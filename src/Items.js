import React, { Component } from 'react';

class Items extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listItems = this.props.items.map((item) =>
      <div class="item">
        <div class="item-content">{item}</div>
      </div>
    );
    return (
      <div>{listItems}</div>
    );
  }
}

export default Items;