import React, { Component } from 'react';
import './App.css';
import Popup from './Popup.js';
import Items from './Items.js';
import jetpack from 'fs-jetpack'
import uuidv1 from 'uuid/v1';

class App extends Component {

  constructor(props) {
    super(props);
    this.items = React.createRef();
    this.datadir = jetpack.cwd("data");

    this.state = {
      showPopup: false
    }
  }

  newNote() {
    this.setState({
      showPopup: true
    });
  }

  saveNote(content) {
    var newItems = this.state.items;
    if (content) {
      this.datadir.writeAsync(uuidv1(), content).then((result) => {
        this.items.current.forceUpdate();
      });
    }
    this.setState({
      showPopup: false
    });
  }

  render() {
    return (
      <div className='app'>
        <h1>Inbox</h1>
        <button onClick={this.newNote.bind(this)}>New note</button>

        <Items ref={this.items} datadir={this.datadir} />

        {this.state.showPopup ?
          <Popup
            id="foo"
            closePopup={this.saveNote.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

export default App;
