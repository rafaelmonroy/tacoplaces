import React from 'react';

export default class TacoPlace extends React.Component {
  render() {
    const TacoPlaceStyle = {
      position: 'absolute',
      transform: 'translate(-50%, -100%)',
      cursor: 'pointer',
      fontSize: '25px',
      color: '#df1f27',
      transition: 'font-size .3s ease 0s'
    };

    const TacoPlaceStyleHover = {
      ...TacoPlaceStyle,
      fontSize: '40px'
    };

    const style = this.props.$hover ? TacoPlaceStyleHover : TacoPlaceStyle;

    return (
      <React.Fragment>
        <div style={style}>{this.props.text}</div>
        {/* Below is info window component */}
        {this.props.ID === this.props.data._id && (
          <div className="info-window">
            {this.props.data.name}
            <a className="info-window-details" href="/">
              View Full Details
            </a>
          </div>
        )}
      </React.Fragment>
    );
  }
}
