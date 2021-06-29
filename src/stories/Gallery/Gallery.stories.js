import React from 'react';

import { Gallery } from './Gallery';

export default {
  title: 'Hotels/Gallery',
  component: Gallery,
};

const Template = (args) => <Gallery {...args} />;

export const GalleryComponent = Template.bind({});
GalleryComponent.argTypes = {
  /* promoType: {
    name: 'tipo de promo',
    description: 'Descuentos',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'Descuento exclusivo para parejas',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  }, */
};
