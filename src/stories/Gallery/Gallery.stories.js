import React from 'react';

import { Gallery } from './Gallery';

export default {
  title: 'Hotels/Gallery',
  component: Gallery,
};

const Template = (args) => <Gallery {...args} />;

export const GalleryComponent = Template.bind({});
GalleryComponent.argTypes = {
  textButton: {
    name: 'texto en el botton',
    description: 'Agrega o cambia el texto del botton de accion',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'VER FOTOS',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
};
