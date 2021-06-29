import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './Gallery.scss';
import { images } from './image.json';

export const Gallery = ({action, imagePrimary}) => (
  <div className="content-galery">
    <div className="primary-image" style={{ backgroundImage: `url(${images.item || imagePrimary})`}}>
      <Button width={160} onClick={action} background="white" color="black">VER FOTOS</Button>
    </div>
    <ul>
      {images.slice(1, 5).map((data, i) => {
        return(
          <li key={i} style={{ backgroundImage: `url(${data.item})`}}/>
        )
      })}
    </ul>
  </div>
);

Gallery.propTypes = {
  action: PropTypes,
};

Gallery.defaultProps = {
  action: null,
  imagePrimary: 'https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg'
};
