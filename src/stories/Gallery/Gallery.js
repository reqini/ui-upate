import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './Gallery.scss';
import { images } from './image.json';

export const Gallery = ({action, imagePrimary, textButton}) => (
  <div className="content-galery">
    <div className="primary-image" style={{ backgroundImage: `url(${images.item || imagePrimary})`}}>
      <Button width={160} onClick={action} background="white" color="black">{textButton}</Button>
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
  textButton: PropTypes
};

Gallery.defaultProps = {
  action: null,
  textButton: 'VER FOTOS',
  imagePrimary: 'https://media-cdn.tripadvisor.com/media/photo-s/15/a1/d2/af/hotel-r-de-paris.jpg'
};
