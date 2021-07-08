import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import Typography from '../../../Typography/Typography';

import './HotelsCard.scss';


export const HotelsCardResume = ({ image, rating, name, checkIn, checkout, nights, people, direction }) => {

  const [value, setValue] = React.useState(rating);

  return (

  <div className={`content-card-resume shadow`}>
    <div className="image" style={{ backgroundImage: `url(${image})` }} />
    <div className="content padding1">
      <ul>
        <li>
          <Rating
            name="simple-controlled"
            value={value}
            readOnly
          />
        </li>
        <li><Typography variant="h2" fontSize={16} fontWeight={700}>{name}</Typography></li>
        <li><Typography variant="p" fontSize={14}>{direction}</Typography></li>
        <li><Typography variant="p" fontSize={14}><b>{nights}</b> Noche <b>{people}</b> Adultos</Typography></li>
        <li><Typography variant="p" fontSize={14}><b>1</b> Habitacion: <b>LATERAL DOUBLE</b></Typography></li>
        <li><Typography variant="p" fontSize={14}>Check in: <b>{checkIn}</b></Typography></li>
        <li><Typography variant="p" fontSize={14}>Check out: <b>{checkout}</b></Typography></li>
      </ul>
    </div>
  </div>
  )
};

HotelsCardResume.propTypes = {
  rating: PropTypes,
  image: PropTypes,
  direction: PropTypes,
  nights: PropTypes,
  people: PropTypes,
  name: PropTypes,
  checkIn: PropTypes,
  checkout: PropTypes
};

HotelsCardResume.defaultProps = {
  image: 'https://media.upate.com/eyJibHVyIjpmYWxzZSwic3JjIjoiaHR0cDovL3Bob3Rvcy5ob3RlbGJlZHMuY29tL2dpYXRhL29yaWdpbmFsLzEyLzEyNDc3OC8xMjQ3NzhhX2hiX2FfMDcyLmpwZyIsImhlaWdodCI6ZmFsc2UsIndpZHRoIjpmYWxzZX0%3D.jpg',
  rating: 4,
  direction: 'Av. Álvaro Otacílio, 4065',
  nights: 1,
  people: 2,
  name: 'Nombre del hotel de Ejemplo',
  checkIn: '24/09/2021',
  checkout: '25/09/2021'
};
