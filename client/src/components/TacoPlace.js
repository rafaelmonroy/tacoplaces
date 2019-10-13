import React from 'react';

import { TacoPlaceStyle, TacoPlaceStyleHover } from './TacoPlaceStyles';

export default class TacoPlace extends React.Component {
  static defaultProps = {};

  render() {
    const style = this.props.$hover ? TacoPlaceStyleHover : TacoPlaceStyle;

    return <div style={style}>{this.props.text}</div>;
  }
}
