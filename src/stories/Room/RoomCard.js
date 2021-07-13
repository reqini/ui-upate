import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Typography from '../Typography/Typography';

import { rooms } from './rooms.json';

import './RoomCard.scss';

export const RoomCard = ({ type, cancelfree, active, action, night, people, priceFull, priceNight }) => (
  <div className={`content-room-card ${active && 'active'}`}>
    <div  className="col shadow maxCol padding10">
      <Typography variant="p" fontSize={16} fontWeight={700}>{type}</Typography>
    </div>
    <div  className="col shadow shadow">
      {cancelfree && <Typography variant="p" fontSize={12} className="cancel-free padding10 shadow">CANCELACION GRATUITA</Typography>}
      <ul className="padding5">
        {rooms.map((data, i) => {
          return(
            <li key={i}><Typography variant="p" fontSize={13}>{data.title}</Typography></li>
          )
        })}
      </ul>
    </div>
    <div  className="col shadow padding10 flex column jc-center ai-center">
      <Typography variant="p" fontSize={12} margin={'0 0 2px 0'}>por dia</Typography>
      <Typography variant="p" fontSize={25} fontWeight={700}>{`$${priceNight}`}</Typography>
    </div>
    <div  className="col shadow padding10 maxCol flex column jc-center ai-center">
      <Typography variant="p" fontSize={12}>Precio por</Typography>
      <Typography variant="p" fontSize={12} margin={'5px 0'}>{night} noches, {people} personas</Typography>
      <Typography variant="p" fontSize={25} fontWeight={700}>{`$${priceFull}`}</Typography>
      <Typography variant="p" fontSize={11} margin={'5px 0'}>"Impuestos y tasas incluidos"</Typography>
      <Button onClick={action} size={48} background={!active && 'silver'}>{active ? 'RESERVAR AHORA' : 'SELECCIONAR'}</Button>
    </div>
  </div>
);

RoomCard.propTypes = {
  type: PropTypes,
  action: PropTypes,
  priceNight: PropTypes,
  priceFull: PropTypes,
  night: PropTypes.number,
  people: PropTypes.number,
  cancelfree: PropTypes.bool,
  active: PropTypes.bool
};

RoomCard.defaultProps = {
  type: 'Suite standard',
  action: null,
  cancelfree: true,
  active: false,
  priceNight: '569',
  priceFull: '1.468.183',
  night: 13,
  people: 2
};
