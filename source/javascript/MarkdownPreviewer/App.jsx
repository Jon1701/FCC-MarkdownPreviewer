// React.
import React from 'react';
import ReactDOM from 'react-dom';

// Components.
import TextArea from './TextArea.jsx';
import PreviewArea from './PreviewArea.jsx';

class App extends React.Component {

  // Component constructor.
  constructor() {
    super();

    // Initial state.
    //
    // Markdown is empty.
    this.state = {
      markdown: ''
    };
  }

  // Function to get content in the <TextArea/> component.
  getMarkdown(content) {

    // Update markdown property in state with the value content.
    this.setState({
      markdown: content
    });

  }

  // Component render.
  render() {
    return (
      <div className="container">

        <div className="container text-center">
          <h1>FreeCodeCamp Markdown Previewer</h1>
        </div>

        <div className="container">
          <TextArea getMarkdown={this.getMarkdown.bind(this)}/>
          <PreviewArea markdown={this.state.markdown}/>
        </div>

      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app-target"));
