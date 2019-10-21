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
        {this.props.show && this.props.data._id ? (
          <div
            style={{
              width: 80,
              height: 30,
              backgroundColor: '#fff',
              borderRadius: '5px'
            }}
          >
            {this.props.data.name}
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
