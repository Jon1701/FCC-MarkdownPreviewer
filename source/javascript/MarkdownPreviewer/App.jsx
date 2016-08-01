import React from 'react';
import ReactDOM from 'react-dom';

import TextArea from './TextArea.jsx';
import PreviewArea from './PreviewArea.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="container">

        <div className="container text-center">
          <h1>FreeCodeCamp Markdown Previewer</h1>
        </div>
        <div className="container">
          <TextArea/>
          <PreviewArea/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app-target"));
