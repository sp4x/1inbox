import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";


class Popup extends Component {

  constructor(props) {
    super(props);
    this.value = "";
  }

  updateContent(value) {
    this.value = value;
  }

  saveAndExit(e) {
    this.props.closePopup(this.value);
  }

  exit(e) {
    this.props.closePopup(null);
  }

  render() {
    const id = this.props.id;
    return (
      <div className='popup'>
        <div className='popup-inner'>
          <div className="editor-pane">
            <SimpleMDE
              ref={this.editor}
              onChange={this.updateContent.bind(this)}
              options={{
                autofocus: true,  
                spellChecker: false,
                toolbar: false,
                status: false
              }}
            />
          </div>
          <button id="done" onClick={this.saveAndExit.bind(this)}>Done</button>
          <button onClick={this.exit.bind(this)}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default Popup;