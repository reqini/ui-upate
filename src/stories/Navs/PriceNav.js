import React from 'react';
import PropTypes from 'prop-types';

import RoomIcon from '@material-ui/icons/Room';

import Typography from '../Typography/Typography';
import Button from '../Button';

import './PriceNav.scss';

export const PriceNav = ({ promoType, name, price, night, people, direction, scroll, colorPromoType, board, boardColor, action }) => (
  <div className={`nav ${scroll && 'scroll'}`}>
    <div className="wrapper">
      <div className="info-hotel left">
        <Typography fontSize={12} color={colorPromoType} fontWeight="100" variant="span" margin="2px 0">{promoType}</Typography>
        <Typography variant="h3" fontWeight="500" variant="h2">{name}</Typography>
        <Typography variant="p" fontSize={15} margin="5px 0" className="flex-center"><RoomIcon fontSize="small" />{direction}</Typography>
        <Button size={30} width={200} background={boardColor}>
          {board}
        </Button>
      </div>
      <div className="info-hotel block-price-color center">
        <div className="w-full">
          <Typography fontSize={16} fontWeight="400" variant="p">Total final</Typography>
          <Typography variant="h3" fontSize={30} fontWeight="700">${price}</Typography>
          <Typography fontSize={12} fontWeight="100" variant="span" margin="5px 0">{night} noche, {people} personas</Typography>
        </div>
        <Button size={48} onClick={action}>
          VER HABITACIONES
        </Button>
      </div>
    </div>
  </div>
);

PriceNav.propTypes = {
  promoType: PropTypes.shape({}),
  colorPromoType: PropTypes,
  name: PropTypes,
  price: PropTypes.number,
  scroll: PropTypes.bool,
  night: PropTypes.number,
  people: PropTypes.number,
  direction: PropTypes,
  board: PropTypes,
  boardColor: PropTypes,
  action: PropTypes
};

PriceNav.defaultProps = {
  action: null,
  scroll: false,
  promoType: 'Descuento exclusivo',
  colorPromoType: '',
  name: 'Cristal Hotel de Ejemplo',
  direction: 'Av. Bustillo Km. 2.5',
  board: 'All Inclusive',
  boardColor: '#4A90E2',
  price: '1400',
  night: 3,
  people: 2
};
