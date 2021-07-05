import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RoomIcon from '@material-ui/icons/Room';
import SimpleImage from '../SimpleImage';
import Typography from '../Typography/Typography';

import Avion from '../../assets/Avion.svg';
import AvionActive from '../../assets/AvionActive.svg';
import Valija from '../../assets/Valija.svg';
import ValijaActive from '../../assets/ValijaActive.svg';

import './Tabs.scss';

const types = [
  {
    title: 'Vuelos', 
    icon: Avion,
    iconActive: AvionActive
  },
  {
   title: 'Paquetes', 
   icon: Valija,
   iconActive: ValijaActive
  }
];

export const Tabs = ({ children, height }) => {

  const [active, setActive] = useState(types[0]);

  return (
  <div className={`content-tabs`}>
    <div className="image-tabs" style={{ height, backgroundImage: 'url(https://storage.googleapis.com/upate-public/banners/23jun_Playa_1624464304911.png)'}}>
    </div>
    <div className="center-tabs">
      <ul>
        {types.map(type => (
          <li onClick={() => setActive(type)} key={type} className={active === type && `active`}><SimpleImage image={active === type ? type.iconActive : type.icon } /> <Typography variant="p">{type.title}</Typography></li>
        ))}
      </ul>
      <div className="center-content">
        {children} {/* Este contenido la idea es que mute con la solapa activa */}
      </div>
    </div>
  </div>
  )
};

Tabs.propTypes = {
  children: PropTypes.shape({}),
  height: PropTypes,
};

Tabs.defaultProps = {
  height: 200,
};
