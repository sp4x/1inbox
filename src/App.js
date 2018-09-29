import React, { Component } from 'react';
import './App.css';
import Popup from './Popup.js';
import Feed from './Feed';
import path from 'path';
import uuidv1 from 'uuid/v1';

class Datadir {
  constructor(fs, dirname) {
    this.fs = fs;
    this.dirname = dirname;
  }

  list() {
    return this.fs.readdirSync(this.dirname);
  }
  writeAsync(file, content, callback) {
    const destination = path.join(this.dirname, file);
    return this.fs.writeFile(destination, content, 'utf8', callback);
  }
  readAsync(file, callback) {
    const src = path.join(this.dirname, file);
    return this.fs.readFile(src, 'utf8', callback);
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.items = React.createRef();
    this.datadir = new Datadir(props.fs, "data");

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
    if (content) {
      this.datadir.writeAsync(uuidv1(), content, (err) => {
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
        <button id="newnote" onClick={this.newNote.bind(this)}>New note</button>

        <Feed ref={this.items} datadir={this.datadir} />

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
