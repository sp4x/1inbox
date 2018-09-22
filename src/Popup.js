import React, { Component } from 'react';
import CodeMirror from '@skidding/react-codemirror';

require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/python/python');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/theme/monokai.css');

class Popup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      markdownSrc: "# Hello World",
    }
  }

  updateCode(md) {
      this.setState({
            markdownSrc: md
      });
  }

  saveAndExit(e) {
    this.props.closePopup(this.state.markdownSrc);
  }

  exit(e) {
      this.props.closePopup(null);
    }

  render() {
  var options = {
        mode: 'markdown'
   }
    return (
      <div className='popup'>
        <div className='popup-inner'>
          <div className="editor-pane">
              <CodeMirror value={this.state.markdownSrc} onChange={this.updateCode.bind(this)}
               options={options} height="100%"/>
           </div>
        <button onClick={this.saveAndExit.bind(this)}>Done</button>
        <button onClick={this.exit.bind(this)}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default Popup;