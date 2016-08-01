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
    // Default markdown.
    this.state = {
      markdown: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
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
          <h1 className="title">FreeCodeCamp Markdown Previewer</h1>
        </div>

        <div className="container">
          <TextArea getMarkdown={this.getMarkdown.bind(this)} defaultValue={this.state.markdown}/>
          <PreviewArea markdown={this.state.markdown}/>
        </div>

      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app-target"));
