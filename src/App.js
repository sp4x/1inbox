import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SplitPane from 'react-split-pane';
import Popup from './Popup.js';
import Items from './Items.js';

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      markdownSrc: "# Hello World",
      showPopup: false,
      items: ["hello world"]
    }
  }

  newNote() {
    this.setState({
      showPopup: true
    });
  }

  saveNote(md) {
    var newItems = this.state.items;
    if (md) {
      newItems = newItems.concat(md);
    }
    this.setState({
      showPopup: false,
      items: newItems
    });
  }

  render() {
    return (
      <div className='app'>
        <h1>hihi</h1>
        <button onClick={this.newNote.bind(this)}>New note</button>

        <Items items={this.state.items} />

        {this.state.showPopup ?
          <Popup
            text='Close Me'
            closePopup={this.saveNote.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

export default App;
