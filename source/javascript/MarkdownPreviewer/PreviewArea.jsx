// React.
import React from 'react';
import ReactDOM from 'react-dom';

// Markdown.
var marked = require('marked');

class PreviewArea extends React.Component {

  // When component triggers an update, render the markdown as HTML markup.
  componentDidUpdate() {
    this.refs.preview.innerHTML = marked(this.props.markdown);
  }

  // Default markdown render.
  componentDidMount() {
    this.refs.preview.innerHTML = marked(this.props.markdown);
  }

  // Component constructor.
  constructor() {
    super();
  }

  // Component render.
  render() {

    return (
      <div id="section-preview" className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

        <div className="header">
          <h2 className="text-center">Preview</h2>
        </div>

        <div className="content" ref="preview">
        </div>

      </div>
    )
  }
}

export default PreviewArea;
