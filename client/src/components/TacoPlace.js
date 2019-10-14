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

    return <div style={style}>{this.props.text}</div>;
  }
}
