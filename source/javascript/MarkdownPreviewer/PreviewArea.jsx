import React from 'react';
var marked = require('marked');

class PreviewArea extends React.Component {

  createMarkup(value) {

    var x = marked(value, {sanitize: true});

    return {
      __html: x
    }
  }

  // Component render.
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center">

        <div className="header">
          <h2 className="text-center">Preview</h2>
        </div>
        <div
          className="content"
          dangerouslySetInnerHtml={this.createMarkup(this.props.markdown)}>
        </div>

      </div>
    )
  }
}

export default PreviewArea;
