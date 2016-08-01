// React.
import React from 'react';

class TextArea extends React.Component {

  // Event to handle textarea input change.
  handleChange(event) {
    this.props.getMarkdown(event.target.value);
  }

  // Component constructor.
  constructor() {
    super();
  }

  // Component render.
  render() {
    return (
      <div id="section-textarea" className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center">

        <div className="header">
          <h2 className="text-center">Markdown</h2>
        </div>

        <div className="content">
          <textarea onChange={this.handleChange.bind(this)} defaultValue={null}/>
        </div>

      </div>

    )
  }
}

export default TextArea;
