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

export { TacoPlaceStyle, TacoPlaceStyleHover };
