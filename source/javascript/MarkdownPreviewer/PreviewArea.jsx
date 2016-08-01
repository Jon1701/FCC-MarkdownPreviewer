import React from 'react';

class PreviewArea extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center">

      <div className="header">
        <h2 className="text-center">Preview</h2>
      </div>
      <div className="content">
        {this.props.markdown}
      </div>

      </div>
    )
  }
}

export default PreviewArea;
