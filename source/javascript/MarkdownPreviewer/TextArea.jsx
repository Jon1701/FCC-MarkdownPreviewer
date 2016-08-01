import React from 'react';

class TextArea extends React.Component {
  render() {
    return (
      <div className="section-textarea col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center">

        <div className="header">
          <h2 className="text-center">Markdown</h2>
        </div>
        <div className="content">
          <textarea>
          </textarea>
        </div>
      </div>


    )
  }
}

export default TextArea;
