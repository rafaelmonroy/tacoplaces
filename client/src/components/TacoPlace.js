import React from 'react';

export default class TacoPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  showInfoWindow = () => {
    this.setState({ show: !this.state.show });
    console.log(this.props);
  };

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
        {this.state.show && (
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
        )}
      </React.Fragment>
    );
  }
}
